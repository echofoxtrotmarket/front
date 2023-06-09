import { BasicAgent } from './Basic.agent';

class Photo extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }

  async getPhoto(id: string) {
    const { request } = await this._http.get<any>(`/photo/${id}`);
    return request.responseURL;
  }
}

export const InstancePhoto = new Photo();
