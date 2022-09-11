import MockAdapter from 'axios-mock-adapter';
import {AxiosInstance} from 'axios';

export default function registerAxiosMockAdapter(axiosInstance: AxiosInstance) {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axiosInstance, {onNoMatch: 'throwException'});
  // mock.onGet(API_FRONT_END_GALLERY_LIST).reply(200, {data: gallery-albums-album-contents});

  //Put it on the bottom of that function
  mock.onAny().passThrough();
}
