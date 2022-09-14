import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Build Site")
    .items([
      S.listItem()
        .title("Homepage")
        .child(
          S.document()
            .title("Homepage")
            .schemaType("homepage")
            .documentId("homepage")
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        // Add singles to this array to prevent multiple in the studio
        (listItem) => !["homepage"].includes(listItem.getId())
      ),
    ]);
