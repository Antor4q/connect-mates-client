

const Faq = () => {
    return (
        <div className="lg:mb-10 lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl mb-7 text-center">Faq</h2>
            <div className="grid grid-cols-1 px-6 lg:px-6 lg:grid-cols-2 gap-10">
                <div className="col-span-1">
                    <h2 className="text-3xl">Why Choose Us</h2>
                </div>
                <div className="col-span-1 mb-10">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;