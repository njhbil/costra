-- 1. Tabel Users
CREATE TABLE users (
    id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin PRIMARY KEY,
    username VARCHAR(36) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (email),
    UNIQUE (username)
);

-- 2. Tabel Company
CREATE TABLE company (
    id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(100),
    phone VARCHAR(20) UNIQUE,
    created_by VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_company FOREIGN KEY (created_by) REFERENCES users(id)
);

-- 3. Tabel Company_User
CREATE TABLE company_user (
    id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin PRIMARY KEY,
    user_company VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
    user_id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
    role ENUM('owner', 'admin', 'staff', 'viewer') DEFAULT 'viewer',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_company_user_to_company FOREIGN KEY (user_company) REFERENCES company(id),
    CONSTRAINT fk_user_company_user_to_users FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 4. Tabel Products
CREATE TABLE products (
    id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin PRIMARY KEY,
    company_id VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    barcode VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    hpp DECIMAL(15, 2) NOT NULL DEFAULT 0,
    profit_type ENUM('PERCENT', 'NOMINAL') NOT NULL DEFAULT 'PERCENT',
    profit_value DECIMAL(15, 2) NOT NULL DEFAULT 0,
    selling_price DECIMAL(15, 2) NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_company FOREIGN KEY (company_id) REFERENCES company(id)
);