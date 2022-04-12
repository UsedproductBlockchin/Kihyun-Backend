const nodemailer = require("nodemailer");   
class email{  
    static async SendEmail(token_data){//const token_data = token_data;
     //return console.log("여기서 잘 받음",token_data.id);
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: { // 이메일을 보낼 계정 데이터 입력
          user: 'user email',
          pass: 'user psword',
        },
      });
    const emailOptions = { // 옵션값 설정 
        from: '20200803@sungshin.ac.kr',
          to: token_data.email,
          subject: '비밀번호 초기화 이메일입니다.',
          html: `
          <html>
          <head>
          <style type="text/css">
          
          .token-box {
            border:1px solid;
            padding:10px;
            float : down;
            text-align:center;
          }
          .site-box {
            border:1px solid;
            padding:30px;
            text-align:center;
          
           }
          
          
          </style>
          </head>
          
          <body>
            <h1> 비밀번호 초기화 메일</h1>
            <h3>토큰을 복사하여 다음 링크에서 인증 후 비밀번호를 재설정 해주세요</h3>
            <p class="site-box">
            <a>${token_data.token}</a>
            </p>
            <p class="site-box">
              <a href = http://localhost:3000/reset_psword >비밀번호 재설정 페이지</a>
            </p>
          
          </body>
          </html>
          `

          
        };
        transporter.sendMail(emailOptions, (err,info) => {
            if(err){
                return console.log(err);
            }
            console.log("성공");
        });
    }
}
module.exports = email;