import profile from "./assets/profile.jpg";
function App() {
  return (
    <div style={{
      backgroundColor: "rgba(4, 17, 59, 1)",
      color: "white",
      minHeight: "100vh",
      padding: "60px",
fontFamily: "Arial",
maxWidth: "900px",
margin: "0 auto"
    }}>
      
      <img
  src={profile}
  alt="Jean Etzer Charles"
  style={{
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8",
    marginBottom: "20px"
  }}
/>

      
     <h1
  style={{
    fontSize: "58px",
    marginBottom: "5px",
    color: "white",
    letterSpacing: "1px"
  }}
>
  Jean Etzer CHARLES
</h1>

<h2
  style={{
    color: "#89abc2ff",
    fontWeight: "400",
    marginBottom: "25px",
    fontSize: "24px"
  }}
>

  Data Analyst | Econometrics | Statistics
</h2>

      <p>
        Passionate about Data Analysis, Econometrics,
        Python, SQL and Power BI.
      </p>
<h3>About Me</h3>
<p
  style={{
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "18px"
  }}
>
  Passionate about data analysis, statistics, econometrics,
  business intelligence, and problem solving using Python,
  SQL, R, and Power BI for analytics, reporting,
  and data-driven decision making.
</p>
      <button style={{
        padding: "12px 20px",
        backgroundColor: "hsla(155, 88%, 36%, 1.00)",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontSize: "16px"
      }}>
        Contact Me
      </button>

      <h3 style={{ marginTop: "40px" }}>
        Skills
      </h3>

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px"
  }}
>
  <div
    style={{
      backgroundColor: "rgba(186, 203, 240, 1)",
      padding: "15px",
      borderRadius: "10px"
    }}
  ><h4 style={{ color: "#001f3f", fontSize: "22px" }}>
  Credit Scoring Model
</h4>
  
<p>
  Built a predictive credit scoring model using statistical
  analysis and econometric techniques in Python, R.
</p>
  </div>

  <div
    style={{
      backgroundColor: "rgba(188, 203, 238, 1)",
      padding: "15px",
      borderRadius: "10px"
    }}
  >
    <h4 style={{ color: "#001f3f", fontSize: "22px" }}>
  Sales Dashboard
</h4>
<p>
  Interactive dashboard for business reporting,
  KPI tracking, and sales performance analysis.
</p>
  </div>

  <div
    style={{
      backgroundColor: "#cad8f8ff",
      padding: "15px",
      borderRadius: "10px"
    }}
  >
    <h4 style={{ color: "#001f3f", fontSize: "22px" }}>
  Econometrics Research
</h4>
<p>
  Applied econometric and statistical methods
  for data analysis and decision support.
</p>
  </div>
</div>

<h3>Contact</h3>

<p>jeanetzercharles@gmail.com</p>

<p>
  GitHub: 
   <a 
    href="https://github.com/Etzer6" 
    target="_blank"
    rel="noreferrer"
  >
    Etzer6
  </a>
</p>
</div>

  );
}

export default App;