const { SerialPort } = require("serialport");

const serialport = new SerialPort({ path: "COM1", baudRate: 9600 });

// 以 paused mode 监听收到的数据，需要主动读取数据
serialport.on("readable", () => {
  console.log(serialport.read()); // 使用read方法读取数据，可以指定读取字节数
});

// 以 flowing mode 监听收到的数据
serialport.on("data", (data) => {
  console.log(data);
});
