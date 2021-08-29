import React from 'react';
import '../static/css/report.css';
import DetailMicroservice from './DetailMicroservice';

const FinalReport = ({date, time, car, microservices, total, setTotal}) => {

    return (
        <div className="row">
            <div className="col-lg-8 border-report mx-auto">
                {/* header */}
                <div className="row report-header">
                    <div className="col">
                        <h5 className="text-center">Cotización</h5>
                    </div>
                </div>
                {/* body */}
                <div className="row">
                    <div className="col-6 m-3">
                        <i className="fas fa-calendar-week icon"></i>  
                        <span> {date}</span>
                    </div>
                    <div className="col-4 m-3">
                        <i className="fas fa-clock icon"></i> 
                        <span> {time}</span>
                    </div>
                    <div className="col-12 m-3">
                        <i className="fas fa-car icon"></i> 
                        <span> {car}</span>
                    </div>
                    <div className="col-12 m-3">
                        <i className="fas fa-cog icon"></i>
                        <i> Microservicios elegidos</i>
                    </div>
                    
                    
                        {
                            microservices.map((microservice,i)=><DetailMicroservice 
                                key={i+"13"}
                                microservice={microservice}
                                setTotal={setTotal}
                            />)
                        }
                    
                </div>
                {/* footer */}
                <div className="row report-footer mt-3">
                    <div className="col-5">
                        <h5><i className="fas fa-dollar-sign"></i> Total:</h5>
                    </div>
                    <div className="col-7">
                        <h5>{total} USD</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinalReport;