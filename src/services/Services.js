
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
        console.log(x)
      }, 2000);
    });
  }
  
  export async function getClients() {
    const clients = [{
      id: 1,
      name: "Bob",
      bodyUrl: "../assets/characters/bob.png",
      faceUrl: "../assets/characters/bobface.png"
    }, 
    {
        id: 2,
        name: "Safari girl",
        imageUrl: "../assets/characters/safarigirl.png",
        faceUrl: "../assets/characters/safarigirlface.png"
    }];
    
    let x = await resolveAfter2Seconds(clients);
    return x;
  }
  
  export async function getClient(id){
    const e = await getClients();
    return e.find(x=>x.id==id);
  }