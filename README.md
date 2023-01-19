# ban-goo
 
### วิธีเข้า mysql database
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204041.png?raw=true)
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204112.png?raw=true)
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204258.png?raw=true)
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204356.png?raw=true)
- จะมีตารางสำคัญ 
 - esp_id คือ ไอดีของแต่ละอุปกรณ์ และ 
 - user คือ ไอดีของผู้ใช้งาน และรหัสผ่านซึ่ง hash ไว้ เพื่อความปลอดภัย ไม่สามารถดูได้ถึงจะเป็น admin ก็ตาม

------------

### วิธีดูข้อมูลย้อนหลังของเซนเซอร์
- เข้าไปที่ [http://ban-goo.com/db](http://ban-goo.com/db) และใส่รหัสผ่าน
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204430.png?raw=true)

- จะเจอดาต้าเบสที่แยกด้วย esp id ของแต่ละตัว และจะมีตารางแยกข้อมูลเป็นวินาที นาที ชั่วโมง และวัน สามารถคลิกเข้าไปดูหรือแก้ไขข้อมูลดิบได้
-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204544.png?raw=true)

-  ![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20204601.png?raw=true)

------------

### ตัวอย่างโค้ด Arduino และ Library
- ดาวน์โหลด [iotbundle library](https://github.com/canusorn/Iotbundle-esp8266/tree/6c817d879c03d798acec36581245414c7549ffbf "iotbundle library") เวอร์ชั่น 9 (ตามลิ้ง)เท่านั้น

- ใช้ตัวอย่าง 0.1custom
![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20205425.png?raw=true)

------------

### ตั้งค่าการจัดเก็บข้อมูล
- สามารถเข้าไปแก้ไขได้ที่ไฟล์ includes/config.php โดยแก้ผ่าน file manager ของ direct admin
![](https://github.com/canusorn/ban-goo/blob/main/doc/Screenshot%202023-01-19%20205606.png?raw=true)
