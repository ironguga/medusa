import { expectTypeOf } from "expect-type"
import { TextSchema } from "../schema/text"
import { BaseRelationship } from "../relations/base"

describe("Base relationship", () => {
  test("define a custom relationship", () => {
    class HasOne<T> extends BaseRelationship<T> {
      protected relationshipType: "hasOne" | "hasMany" | "manyToMany" = "hasOne"
    }

    const user = {
      username: new TextSchema(),
    }

    const entityRef = () => user
    const relationship = new HasOne(entityRef, {
      foreignKey: "user_id",
    })

    expectTypeOf(relationship["$dataType"]).toEqualTypeOf<() => typeof user>()
    expect(relationship.parse("user")).toEqual({
      name: "user",
      type: "hasOne",
      nullable: false,
      entity: entityRef,
      options: {
        foreignKey: "user_id",
      },
    })
  })

  test("mark relationship as nullable", () => {
    class HasOne<T> extends BaseRelationship<T> {
      protected relationshipType: "hasOne" | "hasMany" | "manyToMany" = "hasOne"
    }

    const user = {
      username: new TextSchema(),
    }

    const entityRef = () => user
    const relationship = new HasOne(entityRef, {
      foreignKey: "user_id",
    }).nullable()

    expectTypeOf(relationship["$dataType"]).toEqualTypeOf<
      (() => typeof user) | null
    >()
    expect(relationship.parse("user")).toEqual({
      name: "user",
      type: "hasOne",
      nullable: true,
      entity: entityRef,
      options: {
        foreignKey: "user_id",
      },
    })
  })
})
