# What is a Codec? (Core Meaning)

### **Codec = COder + DECoder**

> A **codec** is a **pair of algorithms**:

* **Encoder** → converts data into a specific format
* **Decoder** → converts it back

📌 **If something can be encoded, it must be decoded → that pair is a codec.**

---

# Why Codecs Exist (The Real Reason)

Raw data is:

* ❌ Too big
* ❌ Too slow to transmit
* ❌ Not standardized
* ❌ Sometimes impossible to stream in real time

👉 Codecs **solve efficiency + compatibility problems**, not security.

---

# Codec ≠ Encryption (Important)

| Aspect              | Codec                    | Encryption |
| ------------------- | ------------------------ | ---------- |
| Purpose             | Efficient representation | Secrecy    |
| Uses a key?         | ❌ No                     | ✅ Yes      |
| Publicly decodable? | ✅ Yes                    | ❌ No       |
| Loss allowed?       | Sometimes                | ❌ Never    |

---

# Codec vs Encoding (Subtle but Important)

### Encoding (general)

* Any transformation
* Can be trivial (UTF-8, Base64)

### Codec

* **Specialized encoding + decoding**
* Often:

  * Compression
  * Signal processing
  * Media optimization

📌 **All codecs encode data, but not all encodings are codecs.**

---

# The Big Idea: Compression

Most codecs exist to **compress data**.

## Two Types of Codecs

---

## 1️⃣ Lossless Codecs

> Decode output is **bit-for-bit identical** to input.

### Examples

* PNG (images)
* FLAC (audio)
* ZIP
* Gzip

### Use cases

* Text
* Source code
* Medical data
* Logs

📌 **No information is lost**

---

## 2️⃣ Lossy Codecs

> Some data is **intentionally discarded** to reduce size.

### Examples

* MP3 (audio)
* AAC
* H.264 / H.265 (video)
* JPEG (images)

### Why acceptable?

Human perception:

* Can’t hear all frequencies
* Can’t see all details

📌 Loss is **perceptually invisible** (ideally)

---

# Codecs by Domain

---

## 🎧 Audio Codecs

### Raw audio

```text
44,100 samples/sec × 16 bits × 2 channels ≈ 1.4 Mbps
```

Too big → need codec.

### Common audio codecs

| Codec | Type       | Use                   |
| ----- | ---------- | --------------------- |
| WAV   | None (raw) | Recording             |
| MP3   | Lossy      | Music                 |
| AAC   | Lossy      | Streaming             |
| FLAC  | Lossless   | Archival              |
| Opus  | Lossy      | Calls (Discord, Zoom) |

📌 Opus is optimized for **low latency + speech**

---

## 🎥 Video Codecs (Most Complex)

Video = images + time
Compression is HARD.

### Common video codecs

| Codec        | Use                  |
| ------------ | -------------------- |
| H.264        | YouTube, web         |
| H.265 (HEVC) | 4K video             |
| VP9          | Google               |
| AV1          | New, open, efficient |

### What video codecs do internally

* Frame differencing
* Motion vectors
* Spatial compression
* Temporal compression
* Quantization

📌 **They don’t store full frames every time**

---

## 🖼 Image Codecs

| Codec | Lossy | Use              |
| ----- | ----- | ---------------- |
| JPEG  | ✅     | Photos           |
| PNG   | ❌     | UI, transparency |
| WebP  | Both  | Modern web       |
| AVIF  | Both  | Next-gen         |

---

## 📡 Network / Data Codecs

### Serialization codecs

| Codec    | Use            |
| -------- | -------------- |
| JSON     | Human readable |
| Protobuf | Fast, compact  |
| Avro     | Big data       |
| MsgPack  | Binary JSON    |

These:

* Encode structured data
* Decode into objects

---

# Codec vs Container (VERY COMMON CONFUSION)

🚨 **Codec ≠ File format**

### Container

> Holds streams + metadata

### Codec

> Compresses the streams

---

### Example: MP4

```text
MP4 (container)
 ├── H.264 (video codec)
 ├── AAC (audio codec)
 └── Metadata
```

Other containers:

* MKV
* AVI
* MOV
* WebM

📌 Same codec can live in different containers.

---

# Codec Pipeline (Conceptual)

```text
Raw Data
  ↓
Encoder (codec)
  ↓
Compressed Bitstream
  ↓
Decoder (same codec)
  ↓
Original / Approximate Data
```

---

# Codecs in Operating Systems

OS needs codecs to:

* Play media
* Decode fonts
* Render images
* Stream audio

Linux example:

```bash
ffmpeg
gstreamer
```

Browsers:

* Chrome supports H.264, VP9, AV1
* Safari prefers H.264 / HEVC

---

# Codecs in Programming (Your Side)

You don’t usually **write** codecs (very complex), but you:

* Use them
* Configure them
* Choose them

### Example (FFmpeg)

```bash
ffmpeg -i input.mp4 -c:v libx264 output.mp4
```

Meaning:

* Decode input
* Re-encode using H.264

---

# Codecs in Real-Time Apps (WebRTC, Calls)

For calls:

* Low latency > perfect quality

### Used codecs

* Audio: Opus
* Video: VP8 / H.264

📌 That’s why Discord, Zoom feel real-time.

---

# Performance Tradeoffs

| Factor      | Tradeoff         |
| ----------- | ---------------- |
| Compression | CPU usage        |
| Quality     | File size        |
| Latency     | Bitrate          |
| Battery     | Codec complexity |

---

# One-Line Mental Model (Remember This)

> **A codec is a reversible algorithm that turns raw data into a smaller or more usable form and back again.**

---

# Ultra-Short Summary

* Codec = encoder + decoder
* Purpose = efficiency, not security
* Can be lossless or lossy
* Used everywhere: audio, video, images, network data
* Container ≠ codec

