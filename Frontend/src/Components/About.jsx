import React, { useEffect, useState } from 'react'

export default function About({totalMonths,totalYears}) {

  // const [currentTime, setCurrentTime] = useState()

  // useEffect(() => {
  //   const handleCurrentTime = () => {
  //     const locale = 'en';
  //     const time = new Date();
  //     const day = time.toLocaleDateString(locale, { weekday: 'long' });
  //     const month = time.toLocaleDateString(locale, { month: 'long' }); // Get the full month name
  //     const year = time.getFullYear(); // Get the full year (e.g., 2024)
  //     const date = `${day}, ${time.getDate()} ${month} ${year}\n\n`;

  //     console.log(time);  // Full Date object
  //     console.log(day);   // Day of the week (e.g., Monday)
  //     console.log(month); // Month name (e.g., December)
  //     console.log(year);  // Year (e.g., 2024)
  //     console.log(date);  // Full formatted date (e.g., Monday, 10 December 2024)
  //   };

  //   handleCurrentTime();
  // }, []);



// 👉👉 This is working well
  
  // const [totalMonths, setTotalMonths] = useState()
  // const [totalYears, setTotalYears] = useState()

  // useEffect(() => {
  //   const handleCurrentTime = () => {
  //     const locale = 'en';
  //     const time = new Date();
  //     const day = time.toLocaleDateString(locale, { weekday: 'long' });
  //     const monthNumber = time.getMonth() + 1; // getMonth() returns 0 for January, so we add 1
  //     const year = time.getFullYear(); // Get the full year (e.g., 2024)
  //     const date = `${day}, ${time.getDate()} ${monthNumber} ${year}\n\n`;

  //     // console.log(time);  // Full Date object
  //     // console.log(day);   // Day of the week (e.g., Monday)
  //     // console.log(monthNumber); // Month number (e.g., 12 for December)
  //     // console.log(year);  // Year (e.g., 2024)
  //     // console.log(date);  // Full formatted date with month as a number

  //     // var year = 2026
  //     // var monthNumber = 8


  //     const joinMonth = 2
  //     const joinYear = 2024
  //     var diffOfYear = year - joinYear          // 2025-2024 = 1  2026-2024 = 2 
  //     var YearsToMonths = diffOfYear * 12       // 1*12      = 12  2*12      =24
  //     var finalMonthCount = YearsToMonths - joinMonth  // 12-2= 10M  24-2= 22 M
  //     var diffBetweenJoinedMonthAndCMonth = monthNumber - joinMonth
  //     /* here make three cases 
  //     1. ho skata hai current month janbary ho to number of month 1 hoga tab yaha varibale me -1 aayega
  //     2. ho skata hai current month Feb ho to number of month 2 hoga tab yaha varibale me 0 aayega
  //     3. ho sakta hai ki current month march ho to number positive hoga  tab isme 1-10 tak aa sakta hai */
  //     if (diffBetweenJoinedMonthAndCMonth === -1) {
  //       finalMonthCount = finalMonthCount + 1  // 10+1 = 11M   22+1 = 23M 
  //       console.log("-1", finalMonthCount)

  //     }
  //     else if (diffBetweenJoinedMonthAndCMonth === 0) {
  //       finalMonthCount = finalMonthCount + 2  // 10+2 = 12M   22+2 = 24M 
  //       console.log("0", finalMonthCount)


  //     }
  //     else {
  //       finalMonthCount = (finalMonthCount + 2 + diffBetweenJoinedMonthAndCMonth)
  //       console.log("+", finalMonthCount)
  //     }

  //     // if(joinYear<=year){
  //     //   let ex=monthNumber-joinMount
  //     //   console.log(ex)

  //     // }

  //     var TY = (finalMonthCount / 12).toFixed()
  //     console.log("Total Kya aaya hai bhai", TY)

  //     var TM = finalMonthCount % 12
  //     console.log("Total Kya aaya hai bhai", TM)
  //     setTotalMonths(TM)

  //     if (TM >= 6) {
  //       TY = TY - 1;
  //       console.log("Finaly Total Year", TY)
  //       setTotalYears(TY)
  //     }
  //     else {
  //       setTotalYears(TY)
  //     }


  //     console.log(totalMonths)

  //     console.log("Bhai total months kitne hai yrr = ", totalMonths)

  //   };
  //   // console.log(totalYears)




  //   handleCurrentTime();
  // }, []);

  // useEffect(() => {
  //   console.log("Updated Total Years: ", totalYears);
  //   console.log("Updated Total Months: ", totalMonths);
  // }, [totalYears]);  // This will log when totalYears is updated
  return (
    <>
      <section id="about" class="about section">

        <div class="container section-title" data-aos="fade-up">
          <h2 id='size1'>About</h2>
          <p >Hello! <strong className='hightWord'>I'm Dileep</strong>, a passionate Full Stack Developer with a love for building seamless, dynamic, and user-friendly web applications. With <strong className='hightWord'>{totalYears} years</strong> and <strong className='hightWord'>{totalMonths} months</strong> of experience in the tech industry, I specialize in both frontend and backend development, which allows me to create robust, full-fledged applications from the ground up</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src="assets/img/portfolioImg2.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 content">
              <h2 id='size3'>Full Stack Developer &amp; Web Developer.</h2>
              <p class="py-3" >
              I specialize in modern front-end technologies like React, and I have extensive experience building scalable back-end systems with Node.js and Express. I'm well-versed in using both SQL and NoSQL databases, and I focus on writing clean, maintainable code with industry-standard practices.

              </p>
              <div class="row">
                {/* <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>03 July 2003</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9098590873</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Current City:</strong> <span>Noida Utter Pradesh</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Permanent Address :</strong> <span>Village Bardha, Dist. Damoh Madhya Pradesh</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span> Bachelor of Technology (B.Tech)</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>dileeprathore9098@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div> */}
                <div class="col-lg-8">

                  <div class="table-responsive">
                    <table class="table table-striped table-hover">
                      <tbody>

                      <tr>
                        <th>Date Of Birth </th>
                        <td>12 July 2003</td>
                      </tr>
                      <tr>
                        <th>Phone </th>
                        <td>+91 9098590873</td>
                      </tr>
                      <tr>
                        <th>Email </th>
                        <td><a href="mailto:dileeprathore9098@gmail.com">dileeprathore9098@gmail.com</a></td>
                      </tr>
                      <tr>
                        <th>Degree </th>
                        <td>Bachelor of Technology (B.Tech)</td>
                      </tr>
                      <tr>
                        <th>Current City </th>
                        <td>Noida Utter Pradesh</td>
                      </tr>
                      <tr>
                        <th>Permanent Address  </th>
                        <td>Village Bardha, Dist. Damoh Madhya Pradesh</td>
                      </tr>
                      <tr>
                        <th>Freelance </th>
                        <td>Available</td>
                      </tr>
                      </tbody>

                    </table>
                  </div>

                </div>
              </div>
              <p class="py-3">
              Through personal and professional projects, I have honed my skills in solving complex technical challenges, optimizing performance, and delivering high-quality code. I am committed to continuous learning and thrive in collaborative, agile environment.
              </p>
            </div>
          </div>

        </div>

      </section>

    </>
  )
}
