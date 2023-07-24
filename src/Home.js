import React from "react";
import "./Home.css";
import Product from "./product";


function Home() {
  return (
    <div className="home">
      <div className = "home__container">
        <img className = "home__image" 
        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1e1a12cc40bc3f3d229459fc70e8bdcd317efa9f3eb083b3618a75d7cb2432e9._UY500_UX667_RI_TTW_.jpg" alt="" />
        < div className = "home__row">
            < Product id = "123456" title = 'The Lean Startup' price = {999} 
                      image = "https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/4fc76c07-de12-48ec-aa94-27011581bbaa/81vvgzqcskl.jpg"
                      rating = {5} />
            <Product id = "123457" title = 'Christian Dior Shirt ' price = {14523}
                      image = "https://runwaycatalog.in/wp-content/uploads/2021/08/36-5-2.jpg"
                      rating = {3} />
        </div>

        < div className = "home__row">
            <Product id = "123458" title = 'Air Jordan 5' price = {9999} 
                      image = "https://images.vegnonveg.com/resized/700X573/9513/wmns-air-jordan-5-retro-low-indigo-hazefire-red-metallic-silver-647d7e6684c77.jpg"
                      rating = {3} />
            <Product id = "123459" title = 'Ice Jewels : I still remeber the day people like you didnt like me ....' price = {123456789} 
                      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKh-Eb9zZjM8QUy5ycZ640gQtEM-0qAuBdw&usqp=CAU"
                      rating = {5} />
            <Product id = "123456" title = 'Shreemad Bhagvat Geeta' price = {1500} 
                      image = "https://m.media-amazon.com/images/I/91msEbTletL._AC_UF1000,1000_QL80_.jpg"
                      rating = {5} />
            
        </div>

        < div className = "home__row">
            <Product id = "123450" title = 'Lamborghini Avantador' price = {10000000} 
                      image = "https://cdni.autocarindia.com/ExtraImages/20230206060606_lambo_v12.jpg"
                      rating = {4} />
        </div>

      </div>

    </div>
  );
}

export default Home;
