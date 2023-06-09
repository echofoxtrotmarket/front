import { BasicAgent } from "./Basic.agent"

class Category extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getCategories(limit=10, offset=0): Promise<any> {
        const { data } = await this._http.get<any>(`/category/?offset=${offset}&limit=${limit}`);
      
        return data;
    }
    async createCategory(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/category/`,body);
       
        return data;
    }
    async getCategoryById(id:number): Promise<any> {
        const { data } = await this._http.get<any>(`/category/${id}`);
      
        return data;
    }
    async getCategoryByName(name:string): Promise<any> {
        const { data } = await this._http.get<any>(`/add/${name}`);
       
        return data;
    }
}

export const InstanceCategory = new Category() 