import * as fs from "fs"
import * as Handlebars from "handlebars"
import * as path from "path"
import breadcrumbsHelper from "./resources/helpers/breadcrumbs"
import commentHelper from "./resources/helpers/comment"
import commentsHelper from "./resources/helpers/comments"
import declarationTitleHelper from "./resources/helpers/declaration-title"
import escapeHelper from "./resources/helpers/escape"
import hierarchyHelper from "./resources/helpers/hierarchy"
import ifIsReference from "./resources/helpers/if-is-reference"
import ifNamedAnchors from "./resources/helpers/if-named-anchors"
import ifShowBreadcrumbsHelper from "./resources/helpers/if-show-breadcrumbs"
import ifShowNamedAnchorsHelper from "./resources/helpers/if-show-named-anchors"
import ifShowPageTitleHelper from "./resources/helpers/if-show-page-title"
import ifShowReturnsHelper from "./resources/helpers/if-show-returns"
import ifShowTypeHierarchyHelper from "./resources/helpers/if-show-type-hierarchy"
import indexSignatureTitleHelper from "./resources/helpers/index-signature-title"
import parameterTableHelper from "./resources/helpers/parameter-table"
import objectLiteralMemberHelper from "./resources/helpers/type-declaration-object-literal"
import referenceMember from "./resources/helpers/reference-member"
import reflectionPathHelper from "./resources/helpers/reflection-path"
import reflectionTitleHelper from "./resources/helpers/reflection-title"
import relativeUrlHelper from "./resources/helpers/relative-url"
import returns from "./resources/helpers/returns"
import signatureTitleHelper from "./resources/helpers/signature-title"
import tocHelper from "./resources/helpers/toc"
import typeHelper from "./resources/helpers/type"
import typeAndParentHelper from "./resources/helpers/type-and-parent"
import typeParameterTableHelper from "./resources/helpers/type-parameter-table"
import sectionsHelper from "./resources/helpers/section-enabled"
import getFormattingOptionHelper from "./resources/helpers/get-formatting-option"
import titleLevelHelper from "./resources/helpers/title-level"
import typeParameterListHelper from "./resources/helpers/type-parameter-list"
import typeParameterHelper from "./resources/helpers/type-parameter"
import parameterListHelper from "./resources/helpers/parameter-list"
import parameterHelper from "./resources/helpers/parameter"
import { MarkdownTheme } from "./theme"

const TEMPLATE_PATH = path.join(__dirname, "resources", "templates")

export const indexTemplate = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_PATH, "index.hbs")).toString()
)

export const reflectionTemplate = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_PATH, "reflection.hbs")).toString()
)

export const reflectionMemberTemplate = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_PATH, "reflection.member.hbs")).toString()
)

export function registerPartials() {
  const partialsFolder = path.join(__dirname, "resources", "partials")
  const partialFiles = fs.readdirSync(partialsFolder)
  partialFiles.forEach((partialFile) => {
    const partialName = path.basename(partialFile, ".hbs")
    const partialContent = fs
      .readFileSync(partialsFolder + "/" + partialFile)
      .toString()
    Handlebars.registerPartial(partialName, partialContent)
  })
}

export function registerHelpers(theme: MarkdownTheme) {
  breadcrumbsHelper(theme)
  commentHelper(theme)
  commentsHelper(theme)
  declarationTitleHelper(theme)
  escapeHelper()
  hierarchyHelper()
  ifIsReference()
  ifNamedAnchors(theme)
  ifShowBreadcrumbsHelper(theme)
  ifShowNamedAnchorsHelper(theme)
  ifShowPageTitleHelper(theme)
  ifShowReturnsHelper()
  ifShowTypeHierarchyHelper()
  indexSignatureTitleHelper()
  parameterTableHelper()
  objectLiteralMemberHelper(theme)
  referenceMember()
  reflectionPathHelper()
  reflectionTitleHelper(theme)
  relativeUrlHelper(theme)
  returns()
  signatureTitleHelper(theme)
  tocHelper(theme)
  typeHelper()
  typeAndParentHelper()
  typeParameterTableHelper()
  sectionsHelper(theme)
  getFormattingOptionHelper(theme)
  titleLevelHelper(theme)
  typeParameterListHelper()
  typeParameterHelper(theme)
  parameterListHelper()
  parameterHelper(theme)
}
