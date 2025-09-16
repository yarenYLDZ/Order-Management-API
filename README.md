### 📦 Sipariş Yönetim API

Bu proje, müşteri ve sipariş yönetimini sağlayan bir **RESTful API** uygulamasıdır.  
Kullanıcılar yeni sipariş oluşturabilir, mevcut siparişlerini listeleyebilir, güncelleyebilir veya silebilir.

---

## 🚀 Özellikler
- ✅ Sipariş Oluşturma (Ekleme)
- 📋 Sipariş Listeleme
- ❌ Sipariş Silme (İptal Etme)
- ✏️ Sipariş Güncelleme (10 dakika kuralı ile)

---

## 🛠️ Kullanılan Teknolojiler
- **Backend:** Node.js (Express.js)
- **Veritabanı:** SQL tabanlı (Customers, Orders, OrderDetails, Products tabloları)
- **API Testi:** Postman
- **IDE:** Visual Studio Code

---

## 🔗 API Endpointleri

### 1️⃣ Sipariş Oluşturma
`POST /orders`  
- Yeni müşteri kaydı açılır.  
- Sipariş ve ürün detayları ilgili tablolara kaydedilir.  
- Aynı telefon numarası ile ikinci müşteri kaydı yapılamaz.  

### 2️⃣ Sipariş Listeleme
`POST /orderList`  
- Kullanıcı adı, soyadı ve telefon numarası ile kişinin tüm siparişleri listelenir.  
- Yanlış bilgiler veya kayıt bulunmaması durumunda hata mesajı döner.  

### 3️⃣ Sipariş Silme
`DELETE /ordersDeleted`  
- Telefon numarası ve orderId eşleşirse sipariş silinir.  
- Yanlış bilgi girilirse işlem yapılmaz.  

### 4️⃣ Sipariş Güncelleme
`PUT /orderUpdated`  
- Sipariş oluşturulduktan sonraki **10 dakika içinde** güncelleme yapılabilir.  
- Products tablosunda bulunmayan ürünler eklenemez.  

---

## 📂 Veritabanı Yapısı
- **Customers**
- **Orders**
- **OrderDetails**
- **Products**

---

## ⚡ Kurulum

1. Repoyu klonla:
   ```bash
   git clone https://github.com/kullanici-adi/siparis-api.git
