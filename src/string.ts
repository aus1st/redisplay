import {client} from './client.js';

export async function init() {
    //await client.set('msg:4','input by nodejs')
    //await client.expire('msg:4',10);
    const result = await client.get('msg:4');
    console.log('Resultp->: ', result);
}