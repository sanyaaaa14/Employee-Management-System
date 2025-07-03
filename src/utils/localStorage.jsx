const employees = [
    { 
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com", 
        "password": "123",
        "tasks": [
            {
                "title": "Project Documentation",
                "description": "Document all project details and processes.",
                "date": "10 Feb 2025",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "UI Bug Fixes",
                "description": "Resolve UI issues in the dashboard.",
                "date": "11 Feb 2025",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": 2,
        "taskStatus": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
    },

    { 
        "id": 2, 
        "firstName": "Vihaan",
        "email": "employee2@example.com", 
        "password": "123",
        "tasks": [
            {
                "title": "Database Optimization",
                "description": "Improve database query performance.",
                "date": "12 Feb 2025",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "API Documentation",
                "description": "Create clear API documentation.",
                "date": "13 Feb 2025",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "JWT Authentication",
                "description": "Implement secure JWT authentication.",
                "date": "14 Feb 2025",
                "category": "Security",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": 3,
        "taskStatus": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },

    { 
        "id": 3, 
        "firstName": "Kabir",
        "email": "employee3@example.com", 
        "password": "123",
        "tasks": [
            {
                "title": "Code Review",
                "description": "Evaluate and review project code.",
                "date": "15 Feb 2025",
                "category": "Review",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Monthly Report",
                "description": "Prepare the monthly performance report.",
                "date": "16 Feb 2025",
                "category": "Reporting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": 2,
        "taskStatus": { "active": 0, "newTask": 1, "completed": 1, "failed": 0 }
    },

    {
        "id": 4, 
        "firstName": "Reyansh",
        "email": "employee4@example.com", 
        "password": "123",
        "tasks": [
            {
                "title": "Backend Refactoring",
                "description": "Improve backend code structure.",
                "date": "17 Feb 2025",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": 1,
        "taskStatus": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
    },

    { 
        "id": 5, 
        "firstName": "Ayaan",
        "email": "employee5@example.com", 
        "password": "123",
        "tasks": [
            {
                "title": "UI Component Design",
                "description": "Create new UI components.",
                "date": "18 Feb 2025",
                "category": "UI/UX",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "User Testing",
                "description": "Conduct tests for user experience.",
                "date": "19 Feb 2025",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": 2,
        "taskStatus": { "active": 0, "newTask": 1, "completed": 1, "failed": 0 }
    }
]
;


const admin = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => { 
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];

    return { employees, admin };
};
