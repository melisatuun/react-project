export default function App() {

  return (
    <section
      style={{
        fontFamily: '-apple-system',
        fontSize: "1rem",
        fontWeight: 15,
        lineHeight: 10,
        color: "#292b2c",
        backgroundColor: "#fff",
        padding: "3 5em"
      }}
    >

      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "70px 25px",
          marginTop: "50px"
        }}
      >

        <img
          src="img/flowers.jpg"
          alt="Melis Atun"
          style={{
            margin: "-60px auto 20px",
            width: "950px",
            borderRadius: "15%",
            objectFit: "cover",
            marginBottom: "0"
          }}
        />
        <div>
          <p
            style={{
              lineHeight: 1,
              fontWeight: 800,
              marginBottom: "20px",
              fontSize: "2rem"
            }}
          >
            Personal blog website.
          </p>
        </div>
        <p
          style={{
            marginBottom: "0",
            fontWeight: 600,
            fontSize: "1rem"
          }}
        >
          Melis Atun
          <span style={{ fontWeight: 500 }}> · Senior Computer Science Student</span>
        </p>
      </div>
    </section>
  );
}