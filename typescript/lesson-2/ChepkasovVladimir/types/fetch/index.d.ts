/**
 * Created by igornepipenko on 12/8/16.
 */
interface Response{
    blob():Promise<Blob>;
    formData():Promise<FormData>;
    json():Promise<any>;
    text():Promise<string>;
}

interface ResponseBody{
    blob:Blob;
    formData:FormData;
}

interface ResponseInit{
    status:string;
    statusText:string;
}

declare const Response:{
    prototype:Response;
    new (body:ResponseBody,init:ResponseInit):Response;
}

interface InitRequest{
    method:string,
    url:string
}

interface Request{
    method:string
}


declare const Request:{
    prototype:Request;
    new (input:string|Request,init:InitRequest):Request;
}


declare function fetch(input:string|Request,init?:InitRequest):Promise<Response>;