export const createStore = (reducer, initialState) => {
  let _state = initialState
  let _subscriptions = []

  const getState = () => _state

  const dispatch = (action) => {
    _state = reducer(_state, action)
    _subscriptions.forEach((callback) => callback())
  }

  const subscribe = (listener) => {
    _subscriptions.push(listener)

    return () => {
      _subscriptions = _subscriptions.filter((subscription) => subscription !== listener)
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
      acc[key] = reducers[key](state[key], action)

      return acc
    }, {})
  }
}

export const replaceRelationById = (entityList, relation, idKey = "id") =>
  entityList.map((entity) => ({
    ...entity,
    [relation]: entity[relation][idKey],
  }))

export const extractRelation = (entityList, relation) =>
  entityList.map((entity) => entity[relation])

export const byId = (entityList, idKey = "id") => {}

export const allIds = (entityList, idKey = "id") => {}
