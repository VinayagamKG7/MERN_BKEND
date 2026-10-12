
const Home = () => {
    let arrObj = [
        {name:"React" , course:"JS" ,fees:50000},
        {name:"Django" , course:"Python" ,fees:20000},
        {name:"SpringBoot" , course:"JAVA" ,fees:10000},
        {name:"Node" , course:"MERN" ,fees:40000}
    ]
  return (

    <>

    <div className='bg-red-300 p-10 h-100 text-white flex justify-center items-center gap-4 mt-5'>
        {arrObj.map( (item , index) => (
        <div key={index+1} className='flex flex-col gap-2 bg-white p-20 text-black rounded-2xl shadow-2xl'>
            <p>{item.name}</p>
            <p>{item.course}</p>
            <p>{item.fees}</p>
        </div>
    ) )}
    </div>

    

    </>
  )
}

export default Home