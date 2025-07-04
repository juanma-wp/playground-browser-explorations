import { PHP } from "@php-wasm/universal";
import { loadWebRuntime } from "@php-wasm/web";


const php = new PHP(await loadWebRuntime("8.4"))
console.log(php)
php.run({ scriptPath: "./index.php" });

// const php = await PHP.load("8.0", {
//     requestHandler: {
//     documentRoot: "/www",
//     },
// });

// php.mkdirTree("/www");
// php.writeFile("/www/index.php", `<?php echo "Hello " . $_POST['name']; ?>`);
// await php.run({ scriptPath: "./index.php" });

// const response = await php.request({
//     method: "POST",
//     url: "/index.php",
//     data: { name: "John" },
// });
// document.getElementById("output").textContent = response.text;




    
