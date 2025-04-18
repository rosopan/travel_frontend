import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container gap-20 flex flex-col 
    py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
      <div className='hero-map' />

      {/*LEFT*/}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
       <Image src="/camp.svg"
       alt='camp'
       width={50}
       height={50}
       className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' />

       <h1 className='bold-52 lg:bold-88 mt-3'>Putuk Truno Camp Area</h1>
       <p className='regular-16 mt-8 text-gray-30 xl:max-w-[720px]'>
       We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
       </p>

       <div className='my-11 flex flex-wrap gap-5'>
         <div className='flex items-center gap-2'>
          {Array(5).fill(1).map((_,index) => (
            <Image src="/star.svg"
              key={index}
              alt="star"
              height={24}
              width={24}
            />
          ))}
         </div>

         <p className='bold-16 lg:bold-20 text-blue-70'>
          198k
          <span className='regular-16 underline lg:regular-20 ml-1'>
            Excellent Reviews
          </span>
         </p>
       </div>

       <div className='flex flex-col sm:flex-row w-full gap-3'>
        <Button 
          type='button'
          title='Download App'
          variant='btn_green' 
        />
        <Button 
          type='button'
          title='How we work?'
          icon='/play.svg'
          variant='btn_white_text' 
        />
       </div>
      </div>

      <div className='relative flex flex-1 items-start'>
        <div className='relative flex rounded-3xl z-20 px-8 py-8 bg-green-90 gap-8 
        flex-col w-[268px]'>
          <div className='flex flex-col'>
            <div className="flexBetween">
              <p className='regular-16 text-gray-30'>Location</p>
              <Image src="/close.svg" alt='close' height={24} width={24}/>
            </div>
            <p className='bold-16 text-white'>Aguas Calientes</p>
          </div>

            <div className='flexBetween'>
              <div className='flex flex-col'>
              <p className='regular-16 text-gray-30'>Distance</p>
              <p className='bold-16 text-white'>17.9 mi</p>
              </div>

              <div className='flex flex-col'>
              <p className='regular-16 text-gray-30'>Elevation</p>
              <p className='bold-16 text-white'>2 km</p>
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Hero