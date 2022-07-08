// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body= req.body;
  if(req.method==='POST'){
    res.status(200).json(body)
    console.log(body);
  }else{
    res.status(200).json({body:"contacts"})
  }
  
}
