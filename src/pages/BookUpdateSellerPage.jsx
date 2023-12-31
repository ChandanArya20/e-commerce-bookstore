import "../css/book_seller_page.css";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentSellerDetails } from "../auth/sellerAuth";
import ClipLoader from "react-spinners/ClipLoader";

const BookUpdateSellerPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const location = useLocation(); // Get the location object
    const [book, setBook] = useState();

    // Access the book object from the state
    const bookInfo = location.state;

    const getAllBookDetails = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/book/${bookInfo.id}`
            );
            if (response.ok) {
                const bookData = await response.json();
                setBook(bookData);
            }
        } catch (error) {
            console.error(error);
            const errorObj = { errorMessage: error.message };
            navigate("/errorPage", { state: errorObj });
        }
    };

    useEffect(() => {
        getAllBookDetails();
    }, []);

    useEffect(() => {
        console.log(book);
        setValue("id", book?.id);
        setValue("title", book?.title);
        setValue("author", book?.author);
        setValue("description", book?.description);
        setValue("title", book?.title);
        setValue("price", book?.price);
        setValue("language", book?.language);
        setValue("category", book?.category);
        setValue("publishingYear", book?.publishingYear);
        setValue("isbn", book?.isbn);
        setValue("pages", book?.pages);
        setValue("publisher", book?.publisher);
        setValue("format", book?.format);
        setValue("stockAvailability", book?.stockAvailability);
        setValue("edition", book?.edition);
        setValue("deliveryTime", book?.deliveryTime);
    }, [book]);

    const submitBookDetails = async (data) => {
        console.log(data);

        const { coverImage, ...bookData } = data;

        const bookSeller = getCurrentSellerDetails();
        // Create a new object containing bookData and the bookSeller field
        const newData = { ...bookData, bookSeller };

        // Convert the book data to a JSON string and append it to the FormData
        const formData = new FormData();
        formData.append("bookInfo", JSON.stringify(newData));

        // Append the cover image file to the FormData
        formData.append("coverImage", data.coverImage[0]);

        // Fetch API POST request
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/book/seller/update-book`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            if (response.ok) {
                const message = await response.text();
                toast.success(message, {
                    position: "top-center",
                    theme: "dark",
                });
            } else {
                const errorData = await response.json();
                const errMsg = errorData.status;
                throw new Error(errMsg);
            }
        } catch (error) {
            console.error(error);
            const errorObj = { errorMessage: error.message };
            navigate("/errorPage", { state: errorObj });
        }
    };

    return (
        <div className="book-selling-page-container">
            <h1>Update the Book Info</h1>
            <div className="book_selling-Page">
                <form onSubmit={handleSubmit(submitBookDetails)}>
                    <div className="selling-form">
                        <div className="first-half-selling-form">
                            <label>
                                Title:
                                <input
                                    type="text"
                                    placeholder="Enter title"
                                    {...register("title", {
                                        required: "Title is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Length should not be less than 3",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.title?.message}
                            </p>
                            <label>
                                Author:
                                <input
                                    type="text"
                                    defaultValue={book?.author}
                                    placeholder="Enter author"
                                    {...register("author", {
                                        required: "Author is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Length should not be less than 3",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.author?.message}
                            </p>

                            <label>
                                Description:
                                <textarea
                                    defaultValue={book?.description}
                                    {...register("description", {
                                        required: "Description is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Length should not be less than 3",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.description?.message}
                            </p>

                            <label>
                                Price:
                                <input
                                    type="number"
                                    defaultValue={book?.price}
                                    placeholder="Enter price"
                                    {...register("price", {
                                        required: "Price is required",
                                        min: {
                                            value: 29,
                                            message:
                                                "Price should not be less than 29",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.price?.message}
                            </p>

                            <label>
                                Language:
                                <select
                                    {...register("language", {
                                        required: "Choose one language",
                                    })}
                                >
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="French">French</option>
                                    <option value="Russian">Russian</option>
                                    <option value="German">German</option>
                                    <option value="Chinese">Chinese</option>
                                </select>
                            </label>

                            <p className="error-message">
                                {errors.language?.message}
                            </p>

                            <label>
                                Category:
                                <input
                                    type="text"
                                    defaultValue={book?.category}
                                    placeholder="ex-Fiction, Self-Growth, Finance"
                                    {...register("category", {
                                        required: "Category is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Length should not be less than 3",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.category?.message}
                            </p>

                            <label>
                                Publication Year:
                                <input
                                    type="text"
                                    defaultValue={book?.publishingYear}
                                    placeholder="Enter Publishing year"
                                    {...register("publishingYear", {
                                        min: {
                                            value: 1500,
                                            message:
                                                "Year should not be less than 1500",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.PublishingYear?.message}
                            </p>
                        </div>

                        <div className="second-half-selling-form">
                            <label>
                                ISBN No.:
                                <input
                                    type="number"
                                    defaultValue={book?.isbn}
                                    placeholder="Enter ISBN no."
                                    {...register("isbn", {
                                        pattern: {
                                            value: /^(?=(?:\D*\d){13}$)\d{1,5}(?:[-\ ]?(?:\d{1,5}(?:[-\ ]?(?:\d{1,5}(?:[-\ ]?(?:\d{1,5})?)?)?)?)?)?$/,
                                            message: "Invalid ISBN number",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.isbn?.message}
                            </p>
                            <label>
                                Number of Pages:
                                <input
                                    type="number"
                                    defaultValue={book?.pages}
                                    placeholder="Enter Pages"
                                    {...register("pages", {
                                        required: "Pages is required",
                                        min: {
                                            value: 2,
                                            message:
                                                "Pages should not be less than 2",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.pages?.message}
                            </p>

                            <label>
                                Publisher:
                                <input
                                    type="text"
                                    defaultValue={book?.publisher}
                                    placeholder="Enter publisher"
                                    {...register("publisher", {
                                        required: "Publisher is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Length should not be less than 3",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.publisher?.message}
                            </p>

                            <label>
                                Format:
                                <select
                                    {...register("format", {
                                        required: "Choose one fomat",
                                    })}
                                >
                                    <option value="">Select a format</option>
                                    <option value="hardcover">Hardcover</option>
                                    <option value="paperback">Paperback</option>
                                    <option value="ebook">Ebook</option>
                                    <option value="audiobook">Audiobook</option>
                                    <option value="pdf">PDF</option>
                                    <option value="kindle">Kindle</option>
                                    <option value="epub">ePub</option>
                                </select>
                            </label>
                            <p className="error-message">
                                {errors.format?.message}
                            </p>

                            <label>
                                Stock Availability:
                                <input
                                    type="number"
                                    defaultValue={book?.stockAvailability}
                                    placeholder="Enter stock"
                                    {...register("stockAvailability", {
                                        required: "Stock is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "Stock should not be less than 1",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.stockAvailability?.message}
                            </p>

                            <label>
                                Edition:
                                <input
                                    type="number"
                                    defaultValue={book?.edition}
                                    placeholder="Enter edition"
                                    {...register("edition", {
                                        min: {
                                            value: 1,
                                            message:
                                                "Edition should not be less than 1",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.edition?.message}
                            </p>

                            <label>
                                Delivery Time:
                                <input
                                    type="number"
                                    defaultValue={book?.deliveryTime}
                                    placeholder="Enter delivery time (in days)"
                                    {...register("deliveryTime", {
                                        required: "Delivery time is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "Delivery time should not be less than 1",
                                        },
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.deliveryTime?.message}
                            </p>

                            <label>
                                Cover Image:
                                <input
                                    type="file"
                                    accept="image/*"
                                    // accept=".pdf"
                                    // multiple
                                    {...register("coverImage", {
                                        required: "First upload Image",
                                    })}
                                />
                            </label>
                            <p className="error-message">
                                {errors.coverImage?.message}
                            </p>
                        </div>
                    </div>
                    <div className="book-submit">
                        <button
                            type="submit"
                            className="book-submit-button"
                            disabled={loading ? true : false}
                        >
                            {loading ? "Processing..." : "Update"}
                            {loading && (
                                <div className="loading-overlay-btn">
                                    <ClipLoader color="#620c88" />
                                </div>
                            )}
                        </button>
                        <button
                            type="button"
                            className="book-back-button"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookUpdateSellerPage;
