const EmailJSScript = () => {
    return (
      <>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
        <script type="text/javascript">
          {`
            (function() {
              emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
            })();
          `}
        </script>
      </>
    )
  }
  
  export default EmailJSScript
  
  