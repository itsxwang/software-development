import json
import os
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from tkinter.scrolledtext import ScrolledText

class JSONConverterApp:
    def __init__(self, root):
        self.root = root
        self.root.title('JSON to IPython Notebook Converter')
        self.root.geometry('600x400')
        self.root.configure(bg='#f0f0f0')
        
        # Configure style
        style = ttk.Style()
        style.configure('TButton', padding=10)
        style.configure('TFrame', background='#f0f0f0')
        
        # Main container
        main_frame = ttk.Frame(root, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Title
        title_label = ttk.Label(
            main_frame,
            text="Convert JSON to IPython Notebook",
            font=('Helvetica', 16, 'bold')
        )
        title_label.pack(pady=20)
        
        # Description
        desc_label = ttk.Label(
            main_frame,
            text="Choose your input method:",
            font=('Helvetica', 10)
        )
        desc_label.pack(pady=10)
        
        # Buttons frame
        btn_frame = ttk.Frame(main_frame)
        btn_frame.pack(pady=20)
        
        # JSON Code button
        self.code_btn = ttk.Button(
            btn_frame,
            text="Paste JSON Code",
            command=self.open_code_window,
            width=20
        )
        self.code_btn.pack(pady=10)
        
        # File Path button
        self.file_btn = ttk.Button(
            btn_frame,
            text="Choose JSON File",
            command=self.open_file_dialog,
            width=20
        )
        self.file_btn.pack(pady=10)

    def is_valid_json(self, json_string):
        try:
            json.loads(json_string)
            return True
        except json.JSONDecodeError:
            return False

    def open_code_window(self):
        code_window = tk.Toplevel(self.root)
        code_window.title('Paste JSON Code')
        code_window.geometry('500x400')
        code_window.configure(bg='#f0f0f0')
        
        frame = ttk.Frame(code_window, padding="20")
        frame.pack(fill=tk.BOTH, expand=True)
        
        # Text area for JSON code
        ttk.Label(frame, text="Paste your JSON code below:").pack(pady=5)
        text_area = ScrolledText(frame, height=15)
        text_area.pack(pady=10, fill=tk.BOTH, expand=True)
        
        def convert_code():
            json_code = text_area.get('1.0', tk.END).strip()
            if not self.is_valid_json(json_code):
                messagebox.showerror("Error", "Invalid JSON code!")
                return
                
            notebook_data = json.loads(json_code)
            save_path = filedialog.asksaveasfilename(
                defaultextension=".ipynb",
                filetypes=[("IPython Notebook", "*.ipynb")]
            )
            if save_path:
                with open(save_path, "w", encoding="utf-8") as f:
                    json.dump(notebook_data, f, indent=4)
                messagebox.showinfo("Success", f"Notebook saved as {save_path}")
                code_window.destroy()
        
        ttk.Button(frame, text="Convert", command=convert_code).pack(pady=10)

    def open_file_dialog(self):
        file_path = filedialog.askopenfilename(
            filetypes=[("JSON files", "*.json"), ("All files", "*.*")]
        )
        if file_path:
            if not file_path.endswith('.json'):
                messagebox.showerror("Error", "Please select a JSON file!")
                return
                
            self.handle_file_conversion(file_path)

    def handle_file_conversion(self, json_file_path):
        try:
            with open(json_file_path, "r", encoding="utf-8") as f:
                notebook_data = json.load(f)
            
            # Ask if user wants to replace existing file
            replace = messagebox.askyesno(
                "Replace File",
                "Do you want to replace the existing file?"
            )
            
            if replace:
                output_path = json_file_path.replace(".json", ".ipynb")
            else:
                output_path = filedialog.asksaveasfilename(
                    defaultextension=".ipynb",
                    filetypes=[("IPython Notebook", "*.ipynb")]
                )
                if not output_path:
                    return
            
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(notebook_data, f, indent=4)
            
            if replace:
                os.remove(json_file_path)
                messagebox.showinfo(
                    "Success",
                    f"Converted {json_file_path} to {output_path} and deleted the original file."
                )
            else:
                messagebox.showinfo("Success", f"Notebook saved as {output_path}")
                
        except json.JSONDecodeError:
            messagebox.showerror("Error", "Invalid JSON file!")
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred: {str(e)}")

if __name__ == "__main__":
    root = tk.Tk()
    app = JSONConverterApp(root)
    root.mainloop()