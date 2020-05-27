type CallBackError = Error | null; 

type CallBack = (err:CallBackError, res:Object)=> void ;

type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb:CallBack) => {
  if(cb){
    cb(null,{message:'Todo salió bien'});
  }
}