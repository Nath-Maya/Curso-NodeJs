
function funcionError() {
   return 3 + z;
};

try {
   funcionError();
} catch (error) {
   console.error("vaya, algo esta mal");
   // console.error(error);
   console.error(error.message);
};



