# First: What problem are CRF & Bitrate solving?

When encoding media, you must answer **one** question:

> **Do I care more about consistent quality or predictable file size?**

* If you care about **quality** → **CRF**
* If you care about **file size / bandwidth** → **Bitrate**

That’s the entire difference.

Everything else is a consequence of that choice.

---

# 1️⃣ Bitrate (Old-school, size-focused)

## What is Bitrate?

> **Bitrate = how many bits are used per second of media**

Example:

```
2 Mbps = 2,000,000 bits per second
```

If a video is 10 seconds:

```
2 Mbps × 10s = 20 Mb ≈ 2.5 MB
```

📌 **Bitrate directly controls file size**

---

## How bitrate-based encoding works

You say:

```bash
-b:v 2M
```

Encoder promise:

> “I will use ~2 megabits per second, no matter what.”

### Result:

* Simple scenes → wasted bits
* Complex scenes → not enough bits → quality loss

---

## Example

### Video content:

* Scene 1: Talking head (simple)
* Scene 2: Explosion, fast motion (complex)

With fixed bitrate:

* Scene 1 → too many bits
* Scene 2 → too few bits → blocky video

📌 Bitrate **does not understand complexity**

---

## When bitrate is useful

✅ **Streaming**

* YouTube
* Netflix
* Live video
* Limited bandwidth

✅ **Broadcast**

* TV
* Radio

✅ **Predictable storage**

* DVDs
* USB limits

---

## FFmpeg example (bitrate)

```bash
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M output.mp4
```

Meaning:

> Encode video at **exactly ~2 Mbps**

---

# 2️⃣ CRF (Modern, quality-focused)

## What is CRF?

> **CRF = Constant Rate Factor**

It means:

> “Keep the **visual quality constant**, use as many bits as needed.”

📌 File size becomes a **result**, not a target.

---

## How CRF works internally (conceptual)

Encoder asks **per frame**:

* Is this frame simple?
* Is it complex?
* Is motion high?
* Is detail high?

Then:

* Simple frame → fewer bits
* Complex frame → more bits

👉 **Quality stays consistent**

---

## CRF scale (H.264 / x264)

| CRF | Meaning              |
| --- | -------------------- |
| 0   | Lossless (huge size) |
| 18  | Visually lossless    |
| 23  | Default              |
| 28  | Low quality          |
| 35+ | Very bad             |

📌 **Lower CRF = higher quality + bigger file**

---

## FFmpeg example (CRF)

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 output.mp4
```

Meaning:

> “Preserve near-original quality, size doesn’t matter.”

---

# 3️⃣ Side-by-side comparison (IMPORTANT)

| Aspect       | Bitrate     | CRF        |
| ------------ | ----------- | ---------- |
| Controls     | File size   | Quality    |
| File size    | Predictable | Variable   |
| Quality      | Variable    | Consistent |
| Scene-aware  | ❌ No        | ✅ Yes      |
| Best for     | Streaming   | Archiving  |
| Modern usage | Less        | More       |

---

# 4️⃣ Visual intuition (VERY IMPORTANT)

### Bitrate mindset

> “I have **X bits per second**, deal with it.”

### CRF mindset

> “I want **this quality**, use whatever bits needed.”

---

# 5️⃣ Why CRF is preferred today

Modern codecs (H.264, H.265, AV1):

* Are very good at judging visual importance
* Use perceptual models (human vision)

So:

* CRF gives **better-looking videos**
* Smaller size for same perceived quality

📌 That’s why YouTube internally uses **quality-based encoding**, not fixed bitrate.

---

# 6️⃣ Why streaming still uses bitrate

Streaming must:

* Fit network pipes
* Avoid buffering
* Work in real-time

So they use:

* **Bitrate ladders** (240p, 480p, 720p)
* **ABR (Adaptive Bitrate Streaming)**

YouTube switches bitrate **on the fly**.

---

# 7️⃣ CRF + Preset (Hidden power)

CRF works together with `-preset`.

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -preset slow output.mp4
```

### Preset controls:

* CPU usage
* Compression efficiency

| Preset    | Effect             |
| --------- | ------------------ |
| ultrafast | Big file, fast     |
| medium    | Balanced           |
| slow      | Smaller file, slow |

📌 **Preset does NOT affect quality, only size & speed**

---

# 8️⃣ Audio: CRF vs Bitrate?

⚠️ Important:

* **CRF is mostly for video**
* Audio usually uses **bitrate**

Example:

```bash
-c:a aac -b:a 128k
```

Why?

* Audio perception models are simpler
* Bitrate works well for sound

---

# 9️⃣ Real-world rules (memorize these)

### If you are uploading to YouTube

✅ Use CRF

### If you are storing personal videos

✅ Use CRF

### If you are streaming live

✅ Use bitrate

### If someone asks “best quality?”

✅ CRF 18–20

---

# 🔟 One-sentence summaries

### Bitrate

> “I want this file to be exactly this big.”

### CRF

> “I want this video to look this good.”

---

# Final mental model (this is gold)

> **Bitrate controls the pipe.
> CRF controls the perception.**

