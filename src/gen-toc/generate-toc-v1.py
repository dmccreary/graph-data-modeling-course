"""
Prompt: I am creating a textbook using the mkdocs system.  
I have a directory in the "docs" directory called "chapters".  
Within the chapters directory I have one directory for each chapter.  
The chapter directories are all numbered like NN-NAME where NN 
is a zero-padded number and NAME is the name of the chapter.  
Within each chapter is a file called index.md.

Please create a Python program that concatenates all the index.md 
files for the entire book and puts them into a single file called toc.md
"""
import os

# Path to the chapters directory
chapters_dir = "../../docs/chapters"

# Output file
output_file = "toc.md"

def concatenate_chapters(chapters_dir, output_file):
    try:
        # Get a sorted list of chapter directories
        chapters = sorted(
            [
                d for d in os.listdir(chapters_dir)
                if os.path.isdir(os.path.join(chapters_dir, d))
            ]
        )

        # Open the output file for writing
        with open(output_file, "w") as toc:
            for chapter in chapters:
                chapter_path = os.path.join(chapters_dir, chapter, "index.md")

                if os.path.isfile(chapter_path):
                    # Write chapter content to the output file
                    with open(chapter_path, "r") as chapter_file:
                        toc.write(f"\n# {chapter}\n\n")  # Add chapter header
                        toc.write(chapter_file.read())
                        toc.write("\n\n")  # Add spacing between chapters

        print(f"Table of contents generated at {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    concatenate_chapters(chapters_dir, output_file)
