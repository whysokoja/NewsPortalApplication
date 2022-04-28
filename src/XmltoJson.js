//import response from 'http-browserify/lib/response'
import React, { useEffect } from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import ReactDom from "react-dom";
import * as XMLParser from "react-xml-parser";
import * as rssParser from 'rss-parser'
//import * as rssParser from 'react-native-rss-parser'

// let Parser = require("rss-parser")
// let parser = new Parser()
// (async () => {
//   let feed = await parser.parseURL("https://www.reddit.com/.rss");
//   console.log(feed.title);

//   feed.items.forEach((item) => {
//     console.log(item.title + ":" + item.link);
//   });
// })();

// const url = "https://medium.com/feed/towards-data-science/tagged/textmining";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { news: [] };
//   }

//   componentDidMount() {
//     this.getNews();
//   }

//   async getNews() {
//     fetch("http://www.nasa.gov/rss/dyn/breaking_news.rss")
//       .then((response) => response.text())
//       .then((responseData) => rssParser.parse(responseData))
//       .then((rss) => {
//         console.log(rss.title);
//         console.log(rss.items.length);
//       });
//   }
// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">News</h1>
//       </header>
//       <div className="App-feeds" />
//       <div className="panel-list">
//         {this.state.news.length === 0 && <p>Loading...</p>}
//         {this.state.news.map((item) => (
//           <div key={item.title}>
//             <h3>{item.title}</h3>
//             <div dangerouslySetInnerHTML={{ __html: item.description }} />
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
const rssURL = "https://www.soccernews.com/feed";
//const rssParser = require("react-xml-parser");
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function XmltoJson({ navigation }) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  // similar to 'componentDidMount', gets called once
  //for refrsh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    fetch(rssURL, {
      mode: "no-cors"
    })
      .then((res) => res.text())
      .then((resData) => rssParser.parseFromString(resData))
      .then((data) => setData(data))
      .then((rss) => {})
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  const renderItem = ({ item }) => {
    //var XMLParser = require('react-xml-parser')
    //let xmlparser = new XMLParser()
    //var parseString = require("xml2js").parseString;
    //useEffect(() => {
    //let url = "https://rss.art19.com/apology-line";
    //fetch(url, {
    //  mode: "no-cors",
    //})
    //.then((res) => res.text())
    // .then(str => new window.DOMParser().parseFromString(str, "application/xml"))
    // .then((str) => parseString.toJson(str, "application/xml"))
    // .then((data) => console.log(data))
    // .then(data => console.log(data))
    //.then(data => {
    // let parser = new DOMParser()
    // let xmlDoc = parser.parseFromString(data, 'text/xml')
    // var xml = new DOMParser().parseFromString(data, 'text/xml')
    // var xml = rssParser(data, 'application/xml')
    //var xml = new xmlparser.parseFromString(data, 'application/xml')
    //var xml = new XMLParser().parseFromString(data, 'application/xml')
    //console.log(xml)
    //})
    //.catch((err) => console.log(err));
    //}, []);
    //   var parseString = require('xml2js').parseString;
    // var http = require('http');
    // function xmlToJson(url, callback) {
    //   var req = http.get(url, function(res) {
    //     var xml = '';

    //     res.on('data', function(chunk) {
    //       xml += chunk;
    //     });

    //     res.on('error', function(e) {
    //       callback(e, null);
    //     });

    //     res.on('timeout', function(e) {
    //       callback(e, null);
    //     });

    //     res.on('end', function() {
    //       parseString(xml, function(err, result) {
    //         callback(null, result);
    //       });
    //     });
    //   });
    // };
    // var url = "https://www.101greatgoals.com/feed/"

    // xmlToJson(url, function(err, data) {
    //   if (err) {
    //     // Handle this however you like
    //     return console.err(err);
    //   }

    //   // Do whatever you want with the data here
    //   // Following just pretty-prints the object
    //   console.log(JSON.stringify(data, null, 2));
    // })

    // document.addEventListener('DOMContentLoaded', ()=>{
    //   let url= "https://www.teamtalk.com/feed"
    //   fetch(url,{
    //     mode:'no-cors'
    //   })
    //   .then(response=>response.text())
    //   .then(data=>{
    //     //console.log(data);
    //     //  let parser = new DOMParser();
    //     //  let xml = parser.parseFromString(data, "application/xml");
    //     //  document.getElementById('output').textContent = data;
    //     //  console.log(xml);
    //     let xmlParser = require('xml2js')
    //     let xmlString = JSON.stringify(data, "application/xml")
    //     console.log(xmlString)
    //   })
    // })
    return (
      //<div>Zain</div>
      <p>a</p>
    );
  };
  return (
    <div>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <span />
      ) : (
        <div>
          <ul
            refreshControl={
              <li refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={data.items}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <div>
                  <button onPress={handleModal}>
                    <div>
                      <img source={{ uri: item.thumbnail }} />
                    </div>
                    <p numberOfLines={2}>{item.title + ". " + item.link}</p>
                    <p numberOfLines={2}>Description:{item.description}</p>
                  </button>
                </div>
              );
            }}
          />
        </div>
      )}
      <div>
        {" "}
        <div isVisible={isModalVisible}>
          <div>
            <div value={item.content} />
            <button title="Hide" onPress={handleModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
