
export default function Admin(){
    return <div className=" bg-gray-400">
        <div className="bg-gray-300 h-96 w-100 ">
        <div className="text-6xl text-center  ">Hi Abhijeet</div> <br />
        <div className="text-4xl text-center">What do you want to do today?</div>
        <div className="flex ">
            <div><input type="file" className="bg-green-50"/>Add Photos</div>
            <div><input type="file" />Add Reviews</div>
            
        </div>
        </div>
        </div>
    
}