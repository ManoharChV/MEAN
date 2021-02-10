import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroServices{
    version = 0;
    constructor(private http:HttpClient){
        this.version = Math.round( Math.random() * 100 )
    }
    getHeroes(){
        return this.http.get("http://localhost:2020/");
    }
    getVersion(){
        return this.version;
    }
}