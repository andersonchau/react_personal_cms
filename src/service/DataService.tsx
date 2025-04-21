import { HashTagSearchReq,HashTagSearchResp,HashTagDetails,HashTagUpdateResp, ContentSearchReq,ContentSearchResp } from '../interfaces/AppInterface';
import axios from 'axios';

let SERVER_API_ENDPOINT = "http://localhost:5050";


export const DataService = {
    seachContent: function (req: ContentSearchReq ) : Promise<ContentSearchResp[]>{
        
        return new Promise<ContentSearchResp[]>((resolve, reject) => {
            //saving MyClass using http service
            //return the saved MyClass or error
             
            const url = SERVER_API_ENDPOINT + "/record/findAll"; // Replace with your server URL    
            fetch(url, {
                method: 'POST', // Use 'GET' for a GET request
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(req), // Include JSON body
              }) .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse JSON response
              })
              .then((result) => {
                console.log("AAA :" + JSON.stringify(result.data));
                resolve(result.data);
              })
              .catch((err) => {
                reject('API Error');
              });
        }); 
            
    },  
    searchAllHashTag:  function (req: HashTagSearchReq ) : Promise<HashTagSearchResp>{
      return new Promise<HashTagSearchResp>((resolve, reject) => {
        //saving MyClass using http service
        //return the saved MyClass or error
        
        
        var res : HashTagSearchResp = {
            totalNumRecord : 1,
            hashTagDetailList : [
                {
                    htId : 1,
                    label : 'Password',
                    description : 'Working use Password', 
                    status : 'A',
                    numInfoAttached : 2
                    
                },
                {
                    htId : 2,
                    label : 'Bookmark',
                    description : 'Useful URLs',
                    status : 'A',
                    numInfoAttached : 4
                },
                {
                    htId : 3,
                    label : 'TODO',
                    description : 'TODO List',
                    status : 'D',
                    numInfoAttached : 20
                },
            ]

        }
        resolve(res);
      
    });
    },
    searchAllHashTagSync :  function (req: HashTagSearchReq ) : HashTagSearchResp {
        var res : HashTagSearchResp = {
            totalNumRecord : 1,
            hashTagDetailList : [
                {
                    htId : 1,
                    label : 'Password',
                    description : 'Working use Password',
                    status : 'A',
                    numInfoAttached : 2
                },
                {
                    htId : 2,
                    label : 'Bookmark',
                    description : 'Useful URLs', 
                    status : 'A',
                    numInfoAttached : 4
                    
                },
                {
                    htId : 3,
                    label : 'TODO',
                    description : 'TODO List', 
                    status : 'D',
                    numInfoAttached : 0
                },
            ]
        }
        return res;
    },
    deleteHashTagById :  function (req: number ) :  Promise<HashTagUpdateResp> {
        console.log("DataService.deleteHashTagById " + req + " called " );
        return new Promise<HashTagUpdateResp>((resolve, reject) => {
            var res : HashTagUpdateResp = {
                result : "OK"
            };
            resolve(res);     
        });
    },
    createHashTag :  function (req: number ) :  Promise<HashTagUpdateResp> {
        console.log("DataService.createHashTag " + req + " called " );
        return new Promise<HashTagUpdateResp>((resolve, reject) => {
            var res : HashTagUpdateResp = {
                result : "OK"
            };
            resolve(res);     
        });
    },
    
    
  }
  