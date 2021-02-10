import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroCRUDService{
    constructor(private http:HttpClient ){}

    getHeroData(){
        return this.http.get("http://localhost:3030/data");
    }
    writeHeroData(newhero){
        return this.http.post("http://localhost:3030/data", newhero);
    }
    deleteHeroData(hid){
        return this.http.delete("http://localhost:3030/delete/"+hid);
    }
    findHerotoUpdate(hid){
        return this.http.get("http://localhost:3030/data/"+hid);
    }
    updateValuesToHero(hid, udhero){
        return this.http.post("http://localhost:3030/data/"+hid, udhero);
    }
}