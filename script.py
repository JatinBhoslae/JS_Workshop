import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch

def text_to_pdf(input_path, output_path):
    """Convert any text-based file (.html, .js, etc.) into a simple PDF."""
    try:
        with open(input_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"❌ Error reading {input_path}: {e}")
        return

    try:
        c = canvas.Canvas(output_path, pagesize=A4)
        width, height = A4
        x, y = inch, height - inch  # margins

        for line in lines:
            # Avoid overflowing the page
            if y < inch:
                c.showPage()
                y = height - inch
            c.drawString(x, y, line.strip())
            y -= 12  # line spacing

        c.save()
        print(f"✅ Converted: {input_path} → {output_path}")
    except Exception as e:
        print(f"❌ Error creating PDF for {input_path}: {e}")


def convert_files_to_pdf(base_folder):
    """Walk through all folders and convert .html/.js files to PDFs."""
    for root, dirs, files in os.walk(base_folder):
        for file in files:
            if file.endswith(".html") or file.endswith(".js"):
                file_path = os.path.join(root, file)
                pdf_path = os.path.splitext(file_path)[0] + ".pdf"

                # Skip if PDF already exists
                if os.path.exists(pdf_path):
                    print(f"⚠️  Skipping (PDF already exists): {file_path}")
                    continue

                text_to_pdf(file_path, pdf_path)


if __name__ == "__main__":
    current_folder = os.path.dirname(os.path.abspath(__file__))
    convert_files_to_pdf(current_folder)
    print("\n🎉 Conversion complete!")
