import { describe, it, expect } from "vitest"
import { replaceRelationById, extractRelation } from "./re-redux"

describe("Re-Redux", () => {
  const initialPosts = [
    {
      id: 1,
      title: "Managing all state in one reducer",
      author: {
        id: 1,
        name: "Iago Dahlem Lorensini",
        email: "iagodahlemlorensini@gmail.com",
      },
    },
    {
      id: 2,
      title: "Using combineReducers to manage reducer logic",
      author: {
        id: 2,
        name: "Talysson de Oliveira Cassiano",
        email: "talyssonoc@gmail.com",
      },
    },
    {
      id: 3,
      title: "Normalizing the state shape",
      author: {
        id: 1,
        name: "Iago Dahlem Lorensini",
        email: "iagodahlemlorensini@gmail.com",
      },
    },
  ]

  const expectedPosts = [
    { id: 1, title: "Managing all state in one reducer", author: 1 },
    {
      id: 2,
      title: "Using combineReducers to manage reducer logic",
      author: 2,
    },
    {
      id: 3,
      title: "Normalizing the state shape",
      author: 1,
    },
  ]

  const expectedAuthors = [
    {
      id: 1,
      name: "Iago Dahlem Lorensini",
      email: "iagodahlemlorensini@gmail.com",
    },
    {
      id: 2,
      name: "Talysson de Oliveira Cassiano",
      email: "talyssonoc@gmail.com",
    },
    {
      id: 1,
      name: "Iago Dahlem Lorensini",
      email: "iagodahlemlorensini@gmail.com",
    },
  ]

  describe("replaceRelationById", () => {
    it("replaces object by their keyId", () => {
      expect(replaceRelationById(initialPosts, "author", "id")).toStrictEqual(expectedPosts)
    })
  })

  describe("extractRelation", () => {
    it("returns the object by their keyId", () => {
      expect(extractRelation(initialPosts, "author")).toStrictEqual(expectedAuthors)
    })
  })
})
