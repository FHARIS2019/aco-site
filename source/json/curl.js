const discoveryCore = process.env.DISCOVERY_CORE;

module.exports = exports = {
  "curl" : {
    "featuredTitlesAll" : {
      "src" : `${discoveryCore}/select?wt=json&fq=sm_collection_code:aco&fq=ss_language:en&fq=
      (ss_book_identifier:columbia_aco003391
        +OR+ss_book_identifier:nyu_aco000348
        +OR+ss_book_identifier:princeton_aco000320
        +OR+ss_book_identifier:aub_aco001663
        +OR+ss_book_identifier:nyu_aco000227
        +OR+ss_book_identifier:auc_aco000056
        +OR+ss_book_identifier:aub_aco001474
        +OR+ss_book_identifier:cornell_aco000223
        +OR+ss_book_identifier:aub_aco000056
        +OR+ss_book_identifier:cornell_aco000032)&sort=ss_book_identifier%20desc&rows=30&fl=*&hl=falsei&q=*`,
      "dest" : "source/json/datasources/featuredTitlesAll.json"
    },
    "frontCount" : {
      "src" : `${discoveryCore}/select?wt=json&fq=sm_collection_code:aco&fq=ss_language:en&fl=id&hl=false&q=*`,
      "dest" : "source/json/datasources/frontCountId.json"
    },
    "subjectCount" : {
      "src" : `${discoveryCore}/select?wt=json&json.nl=arrmap&fq=sm_collection_code:aco&rows=0&facet=true&facet.limit=-1&facet.mincount=1&facet.field=im_field_subject&hl=falsei&q=*`,
      "dest" : "source/json/datasources/subjectCount.json"
    },
    "categoryQueryEn" : {
      "src" : `${discoveryCore}/select?wt=json&json.nl=arrmap&q=sm_collection_code:aco&fq=sm_topic:*&facet=true&rows=0&facet.query=%7B!key=%22General%20Works%22%7Dss_call_number:A*&facet.query=%7B!key=%22Philosophy.%20Psychology.%20Religion%22%7Dss_call_number:B*&facet.query=%7B!key=%22Auxiliary%20Sciences%20of%20History%22%7Dss_call_number:C*&facet.query=%7B!key=%22World%20History%20and%20History%20of%20Europe,%20Asia,%20Africa,%20Australia,%20New%20Zealand,%20etc..%22%7Dss_call_number:D*&facet.query=%7B!key=%22History%20of%20the%20Americas%22%7Dss_call_number:(E*%20OR%20F*)&facet.query=%7B!key=%22Geography.%20Anthropology.%20Recreation%22%7Dss_call_number:G*&facet.query=%7B!key=%22Social%20Sciences%22%7Dss_call_number:H*&facet.query=%7B!key=%22Political%20Science%22%7Dss_call_number:J*&facet.query=%7B!key=%22Law%22%7Dss_call_number:K*&facet.query=%7B!key=%22Education%22%7Dss_call_number:L*&facet.query=%7B!key=%22Music%20and%20Books%20on%20Music%22%7Dss_call_number:M*&facet.query=%7B!key=%22Fine%20Arts%22%7Dss_call_number:N*&facet.query=%7B!key=%22Language%20and%20Literature%22%7Dss_call_number:P*&facet.query=%7B!key=%22Science%22%7Dss_call_number:Q*&facet.query=%7B!key=%22Medicine%22%7Dss_call_number:R*&facet.query=%7B!key=%22Agriculture%22%7Dss_call_number:S*&facet.query=%7B!key=%22Technology%22%7Dss_call_number:T*&facet.query=%7B!key=%22Military%20Science%22%7Dss_call_number:U*&facet.query=%7B!key=%22Naval%20Science%22%7Dss_call_number:V*&facet.query=%7B!key=%22Bibliography.%20Library%20Science,%20Information%20Resources%20(General)%22%7Dss_call_number:Z*`,
      "dest" : "source/json/datasources/categoryQueryEn.json"
    },
    "categoryQueryAr" : {
      "src" : `${discoveryCore}/select?wt=json&json.nl=arrmap&wt=json&json.nl=arrmap&q=sm_ar_topic:*&facet=true&rows=0&facet.query=%7B!key=%22%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B1%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%22%7Dss_call_number:A*&facet.query=%7B!key=%22%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9%20%D9%88%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D9%86%22%7Dss_call_number:B*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%81%D8%B1%D8%B9%D9%8A%D8%A9%20%D9%84%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%22%7Dss_call_number:C*&facet.query=%7B!key=%22%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D9%88%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7%20%D9%88%D8%A2%D8%B3%D9%8A%D8%A7%20%D9%88%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7%22%7Dss_call_number:D*&facet.query=%7B!key=%22%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7%22%7Dss_call_number:(E*%20OR%20F*)&facet.query=%7B!key=%22%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%AB%D8%B1%D8%A8%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D9%81%D9%8A%D9%87%22%7Dss_call_number:G*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9%22%7Dss_call_number:H*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B3%D9%8A%D8%A9%22%7Dss_call_number:J*&facet.query=%7B!key=%22%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%22%7Dss_call_number:K*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%22%7Dss_call_number:L*&facet.query=%7B!key=%22%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89%22%7Dss_call_number:M*&facet.query=%7B!key=%22%D8%A7%D9%84%D9%81%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%AC%D9%85%D9%8A%D9%84%D8%A9%22%7Dss_call_number:N*&facet.query=%7B!key=%22%D8%A7%D9%84%D9%84%D8%BA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A2%D8%AF%D8%A7%D8%A8%22%7Dss_call_number:P*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%22%7Dss_call_number:Q*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B7%D8%A8%22%7Dss_call_number:R*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9%22%7Dss_call_number:S*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%22%7Dss_call_number:T*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%B9%D8%B3%D9%83%D8%B1%D9%8A%D8%A9%22%7Dss_call_number:U*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9%22%7Dss_call_number:V*&facet.query=%7B!key=%22%D8%A7%D9%84%D8%A8%D8%A8%D9%84%D9%8A%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7%20%D8%8C%20%D9%88%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A7%D8%AA%20%D8%8C%20%D9%88%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%22%7Dss_call_number:Z*`,
      "dest" : "source/json/datasources/categoryQueryAr.json"
    }
  }
}
