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

---
---

# What that ffmpeg command actually does? 

This command is **classic FFmpeg**, and understanding it gives you a *real* CS-level grasp of codecs, containers, and transcoding(direct digital-to-digital conversion of one encoding to another).

```
ffmpeg -i input.mp4 -c:v libx264 output.mp4
```

Let’s break it **piece by piece**, then explain **what actually happens internally**.

---

## 1️⃣ What FFmpeg is (context)

**FFmpeg** is a multimedia framework that can:

* Decode media
* Encode media
* Convert formats
* Stream media
* Manipulate audio/video

Internally it uses:

* **Demuxers** (read containers)
* **Decoders** (decode codecs)
* **Encoders** (encode codecs)
* **Muxers** (write containers)

---

## 2️⃣ High-level meaning of the command

> **Convert `input.mp4` into `output.mp4`, re-encoding the video using the H.264 codec (`libx264`).**

This process is called **transcoding**.

---

## 3️⃣ Token-by-token breakdown

### `ffmpeg`

Runs the FFmpeg program.

---

### `-i input.mp4`

**Input file**

* FFmpeg:

  1. Reads the **MP4 container**
  2. Detects:

     * Video stream codec
     * Audio stream codec
     * Metadata

Example:

```text
Input:
  Container: MP4
  Video codec: VP9 / H.265 / MPEG-4 (unknown)
  Audio codec: AAC
```

📌 `-i` means **decode this file**

---

### `-c:v libx264`

**Video codec selection**

* `-c:v` → codec for **video stream**
* `libx264` → H.264 encoder library

So this means:

> “Encode the video stream using H.264”

Important:

* This **forces re-encoding**
* Even if input was already H.264, it will re-encode unless copied

---

### `output.mp4`

**Output container**

* FFmpeg:

  * Takes encoded streams
  * Muxes them into an MP4 container
  * Writes the file

📌 Container chosen by file extension

---

## 4️⃣ What happens internally (step-by-step)

### Step 1: Demuxing

```text
MP4 container → extract streams
```

---

### Step 2: Decoding

```text
Compressed video → raw frames
Compressed audio → raw audio samples
```

Now everything is **raw, uncompressed**

---

### Step 3: Encoding (video only)

```text
Raw frames → H.264 (libx264)
```

Audio:

* ❗ Since no `-c:a` is specified:

  * FFmpeg **copies audio by default** (if compatible)

---

### Step 4: Muxing

```text
H.264 video + original audio → MP4 container
```

---

## 5️⃣ What stays the same vs what changes

| Component   | Result              |
| ----------- | ------------------- |
| Container   | MP4 → MP4           |
| Video codec | Whatever → H.264    |
| Audio codec | Usually unchanged   |
| Quality     | Depends on defaults |
| File size   | Likely reduced      |

---

## 6️⃣ Why libx264 is important

`libx264` is:

* Industry standard H.264 encoder
* Used by:

  * YouTube
  * Netflix
  * Browsers
  * Streaming platforms

Advantages:

* Excellent compression
* Wide device support
* Hardware acceleration support

---

## 7️⃣ What FFmpeg assumes by default

Because you didn’t specify options:

* Bitrate → auto
* CRF → default (23)
* Preset → medium
* Audio → copied

This is why FFmpeg “just works”.

---

## 8️⃣ Equivalent verbose explanation

This command means:

> “Take `input.mp4`, decode it fully, re-encode the video using the H.264 codec, keep the audio as-is if possible, and save everything into a new MP4 file called `output.mp4`.”

---

## 9️⃣ Very common variations (important)

### Copy video (NO re-encode)

```bash
ffmpeg -i input.mp4 -c:v copy output.mp4
```

* Fast
* No quality loss
* Codec must already be compatible

---

### Control quality (CRF)

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 output.mp4
```

| CRF | Quality           |
| --- | ----------------- |
| 18  | Visually lossless |
| 23  | Default           |
| 28  | Low quality       |

---

### Faster encoding

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset fast output.mp4
```

Presets:

```
ultrafast → fast → medium → slow → veryslow
```

---

## 🔟 Key CS concepts involved

This single command touches:

* Codecs
* Containers
* Encoding vs decoding
* Lossy compression
* Transcoding
* Stream multiplexing
* Performance vs quality tradeoff

---

## 1️⃣1️⃣ One-line mental model

> **This command decodes a video, recompresses it using H.264, and writes it back into an MP4 file.**
