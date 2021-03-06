async function search () {
  const discoveryCore = process.env.DISCOVERY_CORE;
  return {
    "htmltitle": "Search",
    "title": [{
      "language_code": "en",
      "language_dir": "ltr",
      "html": "Search Results"
    }, {
      "language_code": "ar",
      "language_dir": "rtl",
      "html": "نتائج البحث"
    }],
    "route": "/search/index.html",
    "bodyClass": "search io-loading",
    "content": {
      "items": {
        "source": `${discoveryCore}/select`,
        "rows": 10,
        "fl": [
          "ss_representative_image",
          "ss_title_long",
          "ss_ar_title_long",
          "ss_book_identifier",
          "sm_author",
          "ss_uri",
          "sm_publisher",
          "ss_pubdate",
          "iass_pubyear",
          "sm_collection_partner_label",
          "sm_field_topic",
          "ss_call_number",
          "zm_subject",
          "zm_partner",
          "ss_publocation",
          "ss_ar_title",
          "sm_ar_author",
          "sm_ar_publisher",
          "sm_ar_publication_date",
          "sm_ar_partner",
          "sm_ar_subject",
          "sm_ar_sauthor",
          "ss_longlabel",
          "ss_sauthor",
          "ss_ar_sauthor",
          "ss_ar_publocation",
          "ss_ar_publication_location",
          "ss_ar_topic",
          "ds_created",
          "score"
        ],
        "fq": [
          {
            "filter": "bundle",
            "value": "dlts_book"
          },
          {
            "filter": "sm_collection_code",
            "value": "aco"
          },
          {
            "filter": "ss_language",
            "value": "en"
          }
        ]
      }
    }
  }
};

module.exports = search;
