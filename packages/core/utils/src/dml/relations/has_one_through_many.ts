import { BaseRelationship } from "./base"
import { RelationshipMetadata } from "../types"

export class HasOneThroughMany<T> extends BaseRelationship<T> {
  protected relationshipType: RelationshipMetadata["type"] = "hasOneThroughMany"
}
