import "../css/recommended_books.css";
import BookCard from "./BookCard";

const RecommendedBooks = () => {
    const sections = [
        {
            title: "Top Deals",
            books: [
                {
                    id: 40,
                    title: "Doglapan - the Book On Hardest Truth (English)  (Hardcover, Ashneer Grover)",
                    author: "Ashneer Grover",
                    description:
                        "\nThis is the unfettered story of Ashneer Grover-the favourite and misunderstood poster boy of Start-up India. Raw, gut-wrenching in its honesty and completely from the heart, this is storytelling at its finest. A young boy with a 'refugee' tag growing up in Delhi's Malviya Nagar outpaces his circumstances by becoming a rank-holder at the pinnacle of academic excellence in India-IIT Delhi. He goes on to do an MBA from the hallowed halls of IIM Ahmedabad, builds a career as an investment banker at Kotak Investment Banking and AmEx, and is pivotal in the making of two unicorns-Grofers, as CFO, and BharatPe, as co-founder. As a judge on the popular TV show Shark Tank India, Ashneer becomes a household name even as his life turns upside down. Controversy, media spotlight, garrulous social media chatter descend, making it difficult to distinguish fact from fiction.",
                    bookListingTime: "2023-08-10T15:02:10",
                    isbn: "",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/26`,
                    price: 199.0,
                    language: "English",
                    category: "Business $ Echonomics",
                    publishingYear: "2022-01-01",
                    pages: 256,
                    publisher: "Penguin 2022",
                    format: "hardcover",
                    stockAvailability: 90,
                    deliveryTime: 3,
                    edition: "1",
                    status: true,
                },
                {
                    id: 65,
                    title: "Life 3.0  (English, Paperback, Tegmark Max)",
                    author: "Tegmark Max",
                    description:
                        "'This is the most important conversation of our time, and Tegmark's thought-provoking book will help you join it' Stephen Hawking THE INTERNATIONAL BESTSELLER. DAILY TELEGRAPH AND THE TIMES BOOKS OF THE YEAR SELECTED AS ONE OF BARACK OBAMA'S FAVOURITE BOOKS OF 2018 AI is the future - but what will that future look like? Will superhuman intelligence be our slave, or become our god? Taking us to the heart of the latest thinking about AI, Max Tegmark, the MIT professor whose work has helped mainstream research on how to keep AI beneficial, separates myths from reality, utopias from dystopias, to explore the next phase of our existence. How can we grow our prosperity through automation, without leaving people lacking income or purpose? How can we ensure that future AI systems do what we want without crashing, malfunctioning or getting hacked? Should we fear an arms race in lethal autonomous weapons? Will AI help life flourish as never before, or will machines eventually outsmart us at all tasks, and even, perhaps, replace us altogether? 'This is a rich and visionary book and everyone should read it' The Times",
                    bookListingTime: "2023-08-15T15:16:54.000014",
                    isbn: "9780141981802",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/51`,
                    price: 350.0,
                    language: "English",
                    category: "Technology & Engineering",
                    publishingYear: null,
                    pages: 384,
                    publisher: "Penguin Books Ltd",
                    format: "paperback",
                    stockAvailability: 46,
                    deliveryTime: 3,
                    edition: "2018",
                    status: true,
                },
                {
                    id: 67,
                    title: "The Theory Of Everything  (English, Paperback, Stephen Hawking)",
                    author: "Stephen Hawking",
                    description:
                        "A series of lectures made by Stephen Hawking in 1990s has been put together in the brilliant work called The Theory Of Everything which deals with all things Physics and more.\n\nSummary Of The Book\n\nIn 1994, Stephen Hawking delivered seven lectures which was published in 1994 called Stephen W. Hawking's Life Works: The Cambridge Lectures. In 2002, an unauthorized version called The Theory Of Everything: The Origin and Fate of the Universe was released.\n\nThis work deals with the theories relevant to the four fundamental natural forces in Physics. This book seeks to remove all the jargon associated with this field and talks straight on about the weak force, gravity, strong force and the electromagnetic force.\n\nInitially Stephen Hawking has stated that there is a fifty percent probability of the four forces unifying into one force. This is what he called The Theory of Everything. However, it is not as simplistic as it sounds. There are traces of pessimism in this book where Hawking admits are obstacles within the theory",
                    bookListingTime: "2023-08-13T15:16:52.000012",
                    isbn: "9788179925911",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/53`,
                    price: 172.0,
                    language: "English",
                    category: "Technology & Engineering",
                    publishingYear: null,
                    pages: 140,
                    publisher: "Jaico",
                    format: "paperback",
                    stockAvailability: 45,
                    deliveryTime: 4,
                    edition: "1stEdition, 2006",
                    status: true,
                },
                {
                    id: 70,
                    title: "Psychology for Physiotherapists  (English, Paperback, Ramalingam Thangamani A.)",
                    author: "Ramalingam Thangamani A.",
                    description:
                        "This handy resource for physiotherapists provides comprehensive insight into the basics of psychology for physiotherapy students. It disseminates the subject matter in a concise and simple form, and covers a wide range of contents in the relevant area. Introducing special chapters for important topics, this book is invaluable for undergraduate and postgraduate physiotherapy students as well as beginner and practitioner physiotherapists.",
                    bookListingTime: "2023-08-10T14:56:28",
                    isbn: "9789386150295",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/56`,
                    price: 360.0,
                    language: "English",
                    category: "Medical",
                    publishingYear: "2017",
                    pages: 236,
                    publisher: "Jaypee Brothers Medical Publishers",
                    format: "paperback",
                    stockAvailability: 50,
                    deliveryTime: 3,
                    edition: "",
                    status: true,
                },
                {
                    id: 37,
                    title: "Object Oriented Programming with C++  (English, Paperback, E Balagurusamy)",
                    author: "E Balagurusamy",
                    description:
                        "\nObject-Oriented Programming with C++, 8th edition is here with some valuable updates. The new edition helps students to assess their learning by answering questions based on learning outcomes. Objective-type questions and dry-run questions are introduced to make students exam ready. A new Appendix on interview questions is for those seeking to join the industry. The book is designed for students studying at the undergraduate level. It provides all-inclusive concepts and programs on object-oriented programming with C++ as an implementation language. Highlights: • 150+ Multi-choice questions • 100+ Dry-run exercises • 90+ Interview questions • Two new projects • New Appendix on Implementation of Abstract Data Types • Classification of review questions on OBE (outcome-based education) learning pattern • All programs upgraded for compatibility with ANSI C++",
                    bookListingTime: "2023-08-10T15:00:56",
                    isbn: "9789389949186",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/25`,
                    price: 670.0,
                    language: "English",
                    category: "Computer & internet",
                    publishingYear: "2010-01-01",
                    pages: 700,
                    publisher: "McGraw Hill Education India",
                    format: "hardcover",
                    stockAvailability: 47,
                    deliveryTime: 3,
                    edition: "8",
                    status: true,
                },
            ],
        },
        {
            title: "Latest Books",
            books: [
                {
                    id: 71,
                    title: "Indian Art and Culture  (English, Paperback, Singhania Nitin)",
                    author: "Singhania Nitin",
                    description:
                        "\nA ‘must have’ for every aspirant of Civil Services Preliminary and Main Examinations. Very well-written notes with vast coverage of minuscule details and facts on topics covered in the syllabus of Indian Heritage and Culture for General Studies-Paper I in Civil Services Examination. A wide ranged knowledge base of the Indian art, paintings, music and architecture presented with the help of several pictures and diagrams which will make it all the more interesting book to read. The book consists of questions from 2020 and 2021 UPSC Prelim Question paper, along with 29 chapters, six appendices and a detailed pluck out chart on UNESCO heritage sites. The edition comes along with online supplementary resource link, consisting of informative content-based videos and practice mock test papers. Salient Features: 1. Four colour edition 2. Comprehensive 4 sections: Visual arts, Performing arts, Culture of India and Appendices 3. Two new chapters on Sculpture, Pottery and Iconography and Flora, Fauna in Indian Culture/ Education Evolution in India through Art & Culture and one new Appendix on UNESCO Networks. 4. Updated current affairs related to Indian Art and Culture 5. Solved prelims 2020-2021 paper as part of Chapters 6. Updated Previous Year Questions and Answers of UPSC Preliminary and Main Examination 7. Videos related to the chapters available through QR codes 8. Keywords in every chapter highlighted in color",
                    bookListingTime: "2023-08-10T15:16:49.000009",
                    isbn: "9789354601804",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/57`,
                    price: 689.0,
                    language: "English",
                    category: "Social-Science, arts and culture",
                    publishingYear: "2020",
                    pages: 655,
                    publisher: "McGraw Hill Education India",
                    format: "paperback",
                    stockAvailability: 100,
                    deliveryTime: 4,
                    edition: " 4, 2022",
                    status: true,
                },
                {
                    id: 48,
                    title: "Share Market Mein 10,000 Ki Investment Se 100 Crore Kaise Kamaen  (Hindi, Paperback, Sundar Shyam Goel)",
                    author: "Sundar Shyam Goel",
                    description:
                        "Share Market Mein 10,000 Ki Investment Se 100 Crore Kaise Kamaen  (Hindi, Paperback, Sundar Shyam Goel)",
                    bookListingTime: "2023-08-16T15:02:10",
                    isbn: "9789390900046",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/34`,
                    price: 199.0,
                    language: "Hindi",
                    category: "Business & Economics",
                    publishingYear: null,
                    pages: 192,
                    publisher: "Prabhat Prakashan",
                    format: "paperback",
                    stockAvailability: 0,
                    deliveryTime: 5,
                    edition: "",
                    status: true,
                },
                {
                    id: 49,
                    title: "Indian Economy for Civil Services and Other Competitive  (English, Paperback, Singhania Nitin)",
                    author: "Singhania Nitin",
                    description:
                        "\nThe Indian economy has undergone marked changes over recent years encompassing series of fluctuations in economic growth and development. This book - Indian Economy by Nitin Singhania is an attempt to pen down economic issues and necessary interventions by stakeholders. The topics have been arranged very systematically and with great conceptual clarity so as to enable readers understand it completely and comprehensively. Written in a lucid manner, the concepts have been enriched with flowcharts, tables, graphs, examples, etc to facilitate understanding and grasping in no time. Salient Features: 1. Comprehensive coverage of various aspects of Indian Economy along with current affairs to provide a holistic view of the subject 2. Separate Appendix on Union Budget 2020-2021 and economic measures related. 3. National and International indices have been mentioned in the relevant chapters for better understanding. 4. Facts and analysis from NITI Aayog reports has been included wherever necessary 5. Chapter wise Previous years' questions of UPSC Preliminary and Main examination have been included for practice and better understanding of the examination trend",
                    bookListingTime: "2023-08-17T15:03:17",
                    isbn: "9789390113101",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/35`,
                    price: 685.0,
                    language: "English",
                    category: "echonomics",
                    publishingYear: "2020-01-01",
                    pages: 600,
                    publisher: "McGraw Hill Education India",
                    format: "paperback",
                    stockAvailability: 88,
                    deliveryTime: 4,
                    edition: "1, 2020",
                    status: true,
                },
                {
                    id: 63,
                    title: "Theory of Machines  (English, Paperback, Rattan S.S.)",
                    author: " Rattan S.S.",
                    description:
                        "Theory of Machines  (English, Paperback, Rattan S.S.)",
                    bookListingTime: "2023-08-17T15:16:56.000016",
                    isbn: "9789353166281",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/49`,
                    price: 750.0,
                    language: "English",
                    category: "Technology & Engineering",
                    publishingYear: null,
                    pages: 888,
                    publisher: "McGraw Hill Education India",
                    format: "paperback",
                    stockAvailability: 20,
                    deliveryTime: 4,
                    edition: "",
                    status: true,
                },
                {
                    id: 52,
                    title: "Financial Planning for Children with Special Needs  (English, Hardcover, Sonlanki Jitendra)",
                    author: "Sonlanki Jitendra",
                    description:
                        "Financial planning for a family with a special needs dependent can be daunting, as there are many additional variables to consider. There are always concerns about where to start and what should be included in the plan. “Financial Planning For The Families Having Children With Special Needs” aims to provide answers to these questions, and more. It presents a comprehensive approach to creating a detailed plan, towards securing the future of not just the special needs dependent but the entire family as well. The book begins by describing our country's attitude and approach to people with special needs. It outlines the challenges faced by their families and recounts changes that could bring about an improvement in their lives. Step by step, the book hand-holds the reader through the process of creating a financial plan. While explaining how to estimate the special needs dependent's lifetime care costs and how the plan could meet them, the book is liberally interspersed with illustrative charts and tables. It offers guidance on effective estate planning, with the help of tools such as a Will, Private Trust, Letter of Intent, Power of Attorney, and others. It also explains why guardianship is important and what happens when the child turns 18. The author, Jitendra P.S. Solanki, who himself is a financial planner that specializes in advising families with special needs dependents, has equipped readers with tools and templates, which assist families in managing their finances. His website – http://www.planspecialneeds.com – provides an even more comprehensive bouquet of such tools and techniques. The book concludes with some valuable resources that such families can look to for further information and support, making it a complete guide and financial companion for families with special needs dependents.",
                    bookListingTime: "2023-08-20T15:06:38",
                    isbn: "9789384061999",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/38`,
                    price: 399.0,
                    language: "English",
                    category: "fiction, finance",
                    publishingYear: null,
                    pages: 240,
                    publisher: "Network18 Publications",
                    format: "paperback",
                    stockAvailability: 10,
                    deliveryTime: 3,
                    edition: "2018",
                    status: true,
                },
                {
                    id: 69,
                    title: "Magbook Indian History for Civil services prelims/state PCS & other Competitive Exam  (English, Paperback, Sahni Janmenjay)",
                    author: "Sahni Janmenjay",
                    description:
                        "Magbook Indian History for Civil services prelims/state PCS & other Competitive Exam  (English, Paperback, Sahni Janmenjay)",
                    bookListingTime: "2023-08-11T15:16:50.00001",
                    isbn: "9789327191356",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/55`,
                    price: 199.0,
                    language: "English",
                    category: "social-science, political-science",
                    publishingYear: "2022",
                    pages: 248,
                    publisher: "Arihant Publication",
                    format: "paperback",
                    stockAvailability: 20,
                    deliveryTime: 3,
                    edition: "2023, 2022",
                    status: true,
                },
            ],
        },
        {
            title: "New Listed",
            books: [
                {
                    id: 41,
                    title: "The Viral Maths | Brahmastra For Maths Calculation (English Printed Edition) By Adda247  (Paperback, Adda247 Publications)",
                    author: "Adda247 Publications",
                    description:
                        '\n"In this competitive world, people have enough knowledge, but still, they are unable to crack the exams due to lack of speed. This book is meant for those people. Addition, Subtraction, Multiplication and Division are the soul of Quant and there is no single question without calculation. In India, the biggest challenge our students face is calculation because their brain is not trained to do the calculations without using pen and paper and it becomes one of the biggest reasons for students\' failure in Competition. I assure you if you practice it for 30 minutes on a daily basis, your Calculation speed will increase 5 times (minimum) in a span of one month. Salient Features: This Book will increase Calculation in 30 days Explanation using Real World scenarios Helpful for calculation without using Pen or Paper"',
                    bookListingTime: "2023-08-10T15:03:17",
                    isbn: "",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/59`,
                    price: 149.0,
                    language: "English",
                    category: "Sceince & Mathematics",
                    publishingYear: "2023-01-01",
                    pages: 312,
                    publisher: "Adda247 Publications",
                    format: "paperback",
                    stockAvailability: 16,
                    deliveryTime: 4,
                    edition: "2",
                    status: true,
                },
                {
                    id: 44,
                    title: "Naveen Ankganit Pratiyogi Parikshaon Ke Liye  (Hindi, Paperback, Aggarwal R.S.)",
                    author: "Aggarwal R.S.",
                    description:
                        "Naveen Ankganit Pratiyogi Parikshaon Ke Liye  (Hindi, Paperback, Aggarwal R.S.)",
                    bookListingTime: "2023-08-12T14:58:42",
                    isbn: "9789352833726",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/30`,
                    price: 425.0,
                    language: "English",
                    category: "Mathematics",
                    publishingYear: null,
                    pages: 732,
                    publisher: "S. Chand Publishing",
                    format: "paperback",
                    stockAvailability: 59,
                    deliveryTime: 4,
                    edition: "2021",
                    status: true,
                },
                {
                    id: 61,
                    title: "Python Programming A Modular Approach  (Paperback, Taneja Sheetal, Kumar Naveen)",
                    author: "Taneja Sheetal, Kumar Naveen",
                    description:
                        "\nPython Programming introduces one of the most rapidly evolving and preferred programming languages using the concept of modularity. One of the highlights of the text is its in-depth treatment of basic concepts. Advanced topics are discussed with multiple examples of applications from various fields such as database management, web and, mobile application development.",
                    bookListingTime: "2023-08-08T15:16:47.000007",
                    isbn: "",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/47`,
                    price: 590.0,
                    language: "English",
                    category: "Programing , computer",
                    publishingYear: "2020-01-01",
                    pages: 585,
                    publisher: "Pearson",
                    format: "paperback",
                    stockAvailability: 30,
                    deliveryTime: 3,
                    edition: "1st",
                    status: true,
                },
                {
                    id: 46,
                    title: "CBSE All In One NCERT Based Science Class 10TH For 2023-24 Exam (Paperback, Arihant Experts)  (Paperback, Experts Compilation)",
                    author: "Experts Compilation",
                    description:
                        "\nChemical Reactions and Equations, Acids, Bases and Salts, Metals and Non-Metals, Carbon and Its Compounds, Life Processes, Control and Coordination, How Do Organisms Reproduce, Heredity, Light: Reflection and Refraction, Human Eye and the Colourful World, Electricity, Magnetic Effects of Electric Current, Our Environment, Experiments, Periodic Tests, Statewise NTSE Questions, Junior Science Olympiad Chapterwise Questions, CBSE Examination Papers 2023, Latest CBSE Sample Question Paper, Sample Paper (1-3)",
                    bookListingTime: "2023-08-14T15:00:56",
                    isbn: "",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/32`,
                    price: 479.0,
                    language: "English",
                    category: "10th cbse science",
                    publishingYear: "2023-01-01",
                    pages: 609,
                    publisher: "ARIHANT",
                    format: "paperback",
                    stockAvailability: 10,
                    deliveryTime: 6,
                    edition: "8",
                    status: true,
                },
                {
                    id: 58,
                    title: "Programming  (English, Paperback, Connor Joseph)",
                    author: "Connor Joseph",
                    description:
                        "Programming  (English, Paperback, Connor Joseph)",
                    bookListingTime: "2023-08-05T15:16:44.000004",
                    isbn: "9781541006225",
                    imageURL: `${process.env.REACT_APP_API_URL}/image/44`,
                    price: 799.0,
                    language: "English",
                    category: "programing, computer",
                    publishingYear: "2020-01-01",
                    pages: 292,
                    publisher: "Createspace Independent Publishing Platform",
                    format: "paperback",
                    stockAvailability: 20,
                    deliveryTime: 3,
                    edition: "",
                    status: true,
                },
            ],
        },
    ];

    return (
        <div>
            {sections.map((section, index) => (
                <div key={index} className="recommended-section" id="books">
                    <h2 className="recommended-section-title">
                        {section.title}
                    </h2>
                    <div className="recommended-section-books">
                        {section.books.map((book, bookIndex) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecommendedBooks;
