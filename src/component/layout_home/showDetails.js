import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            {detail ? (
                <div className="card mb-12" style={{maxWidth: 800}}>
                    <div class="row">
                        <div class="col-md-4">
                            <img src={"../"+detail.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{detail.name}</h5>

                                <p class="card-text">{detail.price}vnđ</p>
                                <p class="card-text">{detail.description}</p>
                                
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default ShowDetail;