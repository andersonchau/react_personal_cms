export interface HashTagDetails {
    htId : number; 
    label : string;
    description : string;
    status : string;
    numInfoAttached : number;
}

export interface HashTagSearchReq {
    searchStr : string; 
    pageNumber : number;
}


export interface HashTagSearchResp {
    totalNumRecord : number;
    hashTagDetailList : HashTagDetails[];
    
}

export interface HashTagUpdateResp {
    result: string
}

export interface HashTagCreateReq {
    hashTagName : string;
    description : string;
}

export interface LoginReq {
    username : string, 
    password : string
}

export interface LoginResp {
    result : string,
    username : string, 
    role : string 

}


// Redux Interface 
export interface UserSettingsState {
    isLoggedIn: boolean,
    username: string,
    role: string,
    myCounter : number
}

export interface ContentSearchReq {
    dataType: string,
    searchText: string
}

export interface ContentSearchResp {
    _id: string, 
    key: number,
    title: string,
    description: string,
    type: string,
    enc: boolean,
    textContent : string,
    hashTags: string[]
}

export interface ContentResultDisplayItem {
    id: string,
    title: string,
    image: string,
    description: string,
  }

export interface ContentResultDisplayItemUIWrapper {
    data : ContentResultDisplayItem,
    onDetailsClick: (id: string) => void;
}