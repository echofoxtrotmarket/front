import { BasicAgent } from "./Basic.agent"

class Subcategory extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getSubcategories(limit=10, offset=0): Promise<any> {
        const { data } = await this._http.get<any>(`/subcategory/?offset=${offset}&limit=${limit}`);
       
        return data;
    }
    async createSubcategory(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/subcategory/`,body);
       
        return data;
    }
    async getSubcategoryById(id:number): Promise<any> {
        const { data } = await this._http.get<any>(`/subcategory/${id}`);
       
        return data;
    }
    async getSubcategoryByName(name:string): Promise<any> {
        const { data } = await this._http.get<any>(`/subcategory/${name}`);
       
        return data;
    }
}

export const InstanceCategory = new Subcategory() 