function AboutMe() {
    return (
        <div class="flex-container">
            <div>
            <h1 style={{ width: "59%", height:"60px", padding:"0px", float:"right", fontFamily:"initial"  }}>About Me</h1> 
            <p style={{ width: "100%", height:"100%", padding:"0px", float:"right", fontFamily:"initial", fontSize:"20px"}}>My name is Iffath Namira and I am the developer of this web application. As someone who started to struggle with acne and bad skin in middle school, I know how hard it can be to find popular yet affordable brands and products. I have taken the data from a set named “Sephora Skincare Ingredients” on Kaggle. I have first analyzed the columns “brand” and “rank” to see the average rating of each brand and show how popular it is. I then analyzed the columns “Label”, “price”, and “rank” to see the average price and price of each product. I have set my program to change “Label” to products and “rank” to popularity so their titles would be more understandable. I used pastel colors to represent a bright and glowy vibe. I hope that with my web application teens like me can easily see what kind of products or brands they should buy.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Skincare" style={{ width: "380px", height:"auto", float:"right", marginLeft:"auto", marginRight:"auto"}}></img>
            </div>
        </div>

    )
}

export default AboutMe;