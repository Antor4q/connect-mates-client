

const Features = () => {
    return (
        <div className="lg:my-16 lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl text-center">Features</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="card  bg-base-100 shadow-xl">
                 <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
             </div>
              <div className="card  bg-base-100 shadow-xl">
                 <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
             </div>
              <div className="card  bg-base-100 shadow-xl">
                 <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Features;