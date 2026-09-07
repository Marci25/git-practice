async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const users = await response.json();
        const simplifiedUsers = users.slice(0, 5).map(({ name, email, address}) => ({
            name,
            email,
            city: address.city,
        }));

        console.table(simplifiedUsers);
    } catch (error) {
        console.error("No se pudieron cargar los usuarios", error.message);
    }
}

fetchUsers();