import "../css/order_page.css";
import "../css/order_filter_model.css";
import SellerOrderItem from "../components/SellerOrderItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { getCurrentSellerDetails } from "../auth/sellerAuth";
import { BiFilterAlt as FilterIcon } from "react-icons/bi";
import SellerOrderFilterModel from "../components/SellerOrderFilterModel";
import BeatLoader from "react-spinners/BeatLoader";

const SellerOrderPage = () => {
    // State for orders and loading
    const [originalOrders, setOriginalOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    
    // Router navigation
    const navigate = useNavigate();
    
    // State for showing filter model and filter status
    const [showFilter, setShowFilter] = useState(false);
    const [filterStatus, setFilterStatus] = useState({
        Pending: false,
        Confirmed: false,
        Shipped: false,
        Delivered: false,
        Cancelled: false,
        Returned: false,
    });

    // Function to apply filters
    const applyFilter = (filteredStatus) => {
        setFilterStatus(filteredStatus);
        const filteredOrders = originalOrders.filter(
            (order) => filteredStatus[order.status]
        );

        if (filteredOrders.length === 0) {
            setOrders(originalOrders);
        } else {
            setOrders(filteredOrders);
        }
    };

    // Function to fetch all seller's orders
    const fetchAllOrders = async () => {
        setLoading(true);
        const sellerId = getCurrentSellerDetails().id;
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/order/seller/${sellerId}/all-orders`
            );

            if (response.ok) {
                const orderList = await response.json();
                setOriginalOrders(orderList);
                setOrders(orderList);
                setLoading(false);
            } else {
                const errorObj = {
                    errorMessage: "Something went wrong, try later...",
                };
                navigate("/errorPage", { state: errorObj });
            }
        } catch (error) {
            console.error(error);
            toast.error("Server is down, try again later", {
                position: "top-center",
                theme: "dark",
            });
        }
    };

    useEffect(() => {
        fetchAllOrders(); // Fetch orders when the component mounts.
    }, []);

    return (
        <>
            <Navbar backButton={true} />
            {loading ? (
                <div className="loading-overlay">
                    <BeatLoader color="#36d7b7" className="loading-spinner" />
                </div>
            ) : orders.length === 0 ? (
                <div className="empty-cart">
                    <h1 className="empty-cart-heading">
                        There is no recent orders...
                    </h1>
                    <button
                        className="empty-cart-btn"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                </div>
            ) : (
                <>
                    <div className="seller_order-page_container">
                        <div className="order-page">
                            <h2>Users Order</h2>
                            <div
                                className="filter-button"
                                onClick={() => setShowFilter(true)}
                            >
                                <FilterIcon />
                                <p>Filters </p>
                            </div>
                            {showFilter && (
                                <SellerOrderFilterModel
                                    setShowFilter={setShowFilter}
                                    currentFilterStatus={filterStatus}
                                    applyFilter={applyFilter}
                                />
                            )}
                            <div className="order-list">
                                {orders?.map((order) => (
                                    <SellerOrderItem
                                        key={order.id}
                                        order={order}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SellerOrderPage;
